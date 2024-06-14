const dotenv = require('dotenv');
const config = dotenv.config();
const queries = require("./queries");

const Pool = require('pg').Pool;


const password = process.env.PASSWORD;
const host = process.env.HOST;
const user = process.env.USER;
const database = process.env.DATABASE;



const pool = new Pool({
    user: user,
    host: host,
    database: database,
    password: password,
    port: 5432,
});

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