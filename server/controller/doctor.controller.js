const {Doctor} = require('../database/index')

module.exports = {
    getAll: async (req, res) => {
        try{
            const getAll = await Doctor.findAll({})
            res.json(getAll)
        }catch(err){
            console.log("Error al obtener todos los usuarios")
            throw err;
        }
    }
}