const getProducts = "SELECT * FROM product ORDER BY id ASC";
const getProductById = "SELECT * FROM product WHERE id = $1";
const getProductByName = "SELECT * FROM product WHERE name = $1";

module.exports = {
    getProducts,
    getProductById,
    getProductByName
}