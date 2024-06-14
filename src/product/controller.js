const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

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
        res.status(200).json(results.rows[0]);
    });
}

const getProductByName = async (req, res) => {
    const name = req.params.name;
    pool.query(queries.getProductByName, [name], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getProducts,
    getProductById,
    getProductByName
}