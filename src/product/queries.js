const getProducts = "SELECT * FROM product ORDER BY id ASC";
const getProductById = "SELECT * FROM product WHERE id = $1";

module.exports = {
    getProducts,
    getProductById
}