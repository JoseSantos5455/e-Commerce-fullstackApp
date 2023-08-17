const {Category}=require('../../db')

const getProductById = async (id, source) => {
    const product =
      source === "api"
        ? (
            await axios.get(
              `https://fakestoreapi.com/products/${id} `
            )
          ).data
        : await Product.findByPk(id, {
            include: {
              model: Category,
              attributes: ["name"],
            },
          });
    return product;
  };

  module.exports ={ getProductById}