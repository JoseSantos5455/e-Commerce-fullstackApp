const {Product}=require('../../db')

const getApiInfoByName = async function(name) {//se usaria en el axios
    
    let productsData = [];

    const urlData = await axios.get()//`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
    urlData.data.results.forEach(p => {
        if(productsData.length < 20) {//numero de productos que mostraremos cuando se haga una busqueda
            productsData.push({
                id: p.id,
                name: p.name,
                description: p.description,
                price: p.price,
                image: p.image,
                shipping: p.shipping,
                color: p.color,
                stock: p.stock,
                category: p.category,
                valoration: p.valoration,
                extras: p.extras
        })}
    })

    return productsData;
}

const getDbInfoByName = async function(name) {
    let Products = await Product.findAll({
        where: {
            name: {
                [Op.iLike]: '%' + name + '%'
            }
        },
        include: {
            model: Product,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    });

    Products = JSON.parse(JSON.stringify(videoGames));
    Products = videoGames.reverse();
    
    return Products;
}

const getProductsByName = async (name) => {
    const dbResults = await getDbInfoByName(name);
    const apiResults = await getApiInfoByName(name);
    return dbResults.concat(apiResults);
  };

  module.exports ={ getProductsByName}