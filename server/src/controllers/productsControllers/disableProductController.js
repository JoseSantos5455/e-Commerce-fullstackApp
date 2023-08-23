const { Product } = require("../../db")


const disableProductController = async (id) => {
    const product = await Product.findByPk(id)
    product.isActive = false
    await product.save()
    return product
}

module.exports = disableProductController

