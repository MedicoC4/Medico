const {Doctor} = require('../database/index')

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
    getOne : async()=>{
        try {
        const oneDoc = await Doctor.getOne({where: {id : req.params.id}}); 
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
      change : async()=>{
        try {
        const Updated = await Doctor.upddate(req.body,{where: {id: req.params.id}})
        res.json(Updated)
        } catch (error) {
            throw error
        }
    },
    add : async (req,res)=>{
        try {
            const added = await Doctor.create(req.body)
            res.json(added)
        } catch (error) {
            throw error
        }
    }
}