const {Doctor, User , Record} = require('../database/index')
const { Op } = require("sequelize");

module.exports = {
    getAll: async (req, res) => {
        try{
            const getAll = await Doctor.findAll({
                where: {
                  type: "doctor"
                }
              })
            res.json(getAll)
        }catch(err){
            console.log("Error al obtener todos los usuarios")
            throw err;
        }
    },
    getOne : async(req,res)=>{
        try {
        const oneDoc = await Doctor.findAll({where: {id : req.params.id}}); 
            res.json(oneDoc);
        } catch (error) {
            throw error
        }
    },
    drop : async(req , res)=>{
        try {
            await Doctor.destroy({where:{ id: req.params.id}})
            res.json('Deleted')
        } catch (error) {
            throw err;
        }
      },
      change : async(req,res)=>{
        try {
        const Updated = await Doctor.update(req.body,{where: {id: req.params.id}})
        res.json(Updated)
        } catch (error) {
            throw new Error(error)
        }
    },
    add : async (req,res)=>{
        try {
            const added = await Doctor.create(req.body)
            res.json(added)
        } catch (error) {
            throw error
        }
    },
    
    migrateDoctor : async(req , res)=>{
        try {
            const added = await Doctor.create(req.body)
            console.log('this is the added',added);
            const oneDoc = await User.update({type : "doctor",DoctorId:added.id},{where: {email : req.body.email}});
            res.json(oneDoc);
        } catch (error) {
            throw error
        }
    },
    updateLocation : async(req , res)=>{
        try {
             const oneDoc = await User.findOne({where: {email : req.body.email}});
             const doc = await User.update({lang :req.body.lang, lat: req.body.lat},{where: {DoctorId : oneDoc.DoctorId}});
            res.json(oneDoc);
        } catch (error) {
            
        }
    },
    recordsDoc : async(req , res)=>{
        try {
            const oneDoc = await User.findOne({where: {email : req.body.email}});

           const allDocs= req.body.Record.map((doc)=>{
              return  {
                    ...doc,
                    DoctorId : oneDoc.DoctorId
                }
            })
        } catch (error) {
            
        }
    },
    getAivableDoc: async (req, res) => {
        try {
          const getDoc = await Doctor.findAll({
            where: {
            isBlocked: { [Op.like]: req.params.blockDoc },
            isverified: { [Op.like]: req.params.verefDoc },
            },
          });
          res.status(200).send(getDoc)
        } catch (error) {
          throw new Error(error);
        }
      },
}