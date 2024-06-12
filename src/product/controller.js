const pool = require("../../db");
const queries = require("./queries");

const getProducts = async (req, res) => {
    pool.query(queries.getProducts, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getProductById = async (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getProductById, [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getProducts,
    getProductById
}