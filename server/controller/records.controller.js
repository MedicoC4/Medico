const {Record, Doctor, User, Pharmacy} = require('../database/index')
const { Sequelize, where } = require("sequelize");
const records = require('../database/models/records');

module.exports = {
    getAll : async (req , res)=>{
        try {
            const allDocs = await Record.findAll({})
            res.json(allDocs)
        } catch (error) {
            throw error
        }
    },
    createDocs : async (req , res)=>{
        try {
            const posted = await Record.create(req.body)
            res.json(posted)
        } catch (error) {
            throw error
        }
    },
    deleteOne : async (req , res)=>{
        try {
            const oneDoc = await Record.destroy({where : {id : req.params.id}})
            res.json(oneDoc)
        } catch (error) {
            throw error
        }
    },
    getOneRecDoc : async (req , res)=>{
        try {
            const getUser = await User.findOne({ where: { email: req.params.email } });
            const doc = await Doctor.findOne({where: {id : getUser.DoctorId}});
            const getRec = await Record.findAll({where : { DoctorId: doc.id}})
            res.json(getRec);
        } catch (error) {
            throw error
        }
    },
    getOneRecPharm : async (req , res)=>{
        try {
            const getUser = await User.findOne({ where: { email: req.params.email } });
            const pharm = await Pharmacy.findOne({where: {id : getUser.PharmacyId}});
            const getRec = await Record.findAll({where : { PharmacyId: pharm.id}})
            res.json(getRec);
        } catch (error) {
            throw error
        }
    },
}