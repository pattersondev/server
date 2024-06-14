const dotenv = require('dotenv');
const config = dotenv.config();
const queries = require("./queries");

const Pool = require('pg').Pool;

const testPool = require('../../db');


console.log(process.env.PASSWORD);

// const pool = new Pool({
//     user: process.env.USER,
//     host: process.env.HOST,
//     database: process.env.DATABASE,
//     password: process.env.PASSWORD,
//     port: 5432,
//     connectionString: 'postgres://uaf8d4lbogp63n:p88ea1bd613fb4503e0e49e4b0667bdfebabe3a9bb6420388feeab927e4b38fec@ce0lkuo944ch99.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d3rf3ajp2ptaah'
// });

const pool = testPool;

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