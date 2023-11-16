const {PharmacyRecords} = require('../database/index')
const { Sequelize } = require("sequelize");

module.exports = {
    getAll : async (req , res)=>{
        try {
            const allDocs = await PharmacyRecords.findAll({})
            res.json(allDocs)
        } catch (error) {
            throw error
        }
    },
    createDocs : async (req , res)=>{
        try {
            const posted = await PharmacyRecords.create(req.body)
            res.json(posted)
        } catch (error) {
            throw error
        }
    },
    deleteOne : async (req , res)=>{
        try {
            const oneDoc = await PharmacyRecords.destroy({where : {id : req.params.id}})
            res.json(oneDoc)
        } catch (error) {
            throw error
        }
    }
}