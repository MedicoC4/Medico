const {Review,Doctor,User} = require('../database/index')


module.exports = {
    getAll: async (req, res) => {
      const { doctorId } = req.params;

      try {
        const doctor = await Doctor.findByPk(doctorId);
    
        if (!doctor) {
          return res.status(404).json({ error: 'Doctor not found' });
        }
        const reviews = await Review.findAll({
          include: [
            {
              model: User,
              attributes: ['id','username','imgUrl'],
            },
          ],
          where: {
            DoctorId: doctorId,
          },
        })
    
        res.json(reviews);
      } catch (error) {
        console.error('Error fetching doctor reviews:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    
    },
    create: async (req, res) => {
      const { doctorId, userId, rating, comment } = req.body;

      try {
        const newReview = await Review.create({
          DoctorId: doctorId,
          UserId: userId,
          review: comment,
          rating: rating,
        });
    
        res.status(201).json(newReview.toJSON());
      } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    
    },
    deleteOne: async (req, res) => {
      let id = req.params.id;
      try {
        const deletedReview = await Review.destroy({
          where: { id: Number(id) },
        });
        res.json(deletedReview);
      } catch (error) {
        throw error;
      }
    }
  };
