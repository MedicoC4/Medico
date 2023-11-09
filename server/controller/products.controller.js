const {Product} = require("../database/index.js")

module.exports = {
    updateQuantity : async (req,res)=>{
        try {
            const updateQ = await Product.update(req.body,{where:{id:req.params.prodId}})
            res.status(202).send(updateQ)
        } catch (error) {
            throw new Error (error)
        }
    },
}
