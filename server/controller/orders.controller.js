const {Order} = require("../database/index.js")

module.exports = {
    getAllOrders : async (req, res) => {
        try {
            const getAll = await Order.findAll({include:["User","Product"]})
            // const getAll = await Order.findAll({include:{ all: true, nested: true }})
             
            res.status(200).send(getAll)
        } catch (error) {
            throw new Error(error)
        }
    }
}