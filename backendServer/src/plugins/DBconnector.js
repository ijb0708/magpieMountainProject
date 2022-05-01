const Client = require('pg').Client;
const config = require('../config').postgreSQL;

const client = new Client(config);

const getTestData = () => {
    client.connect();
    client.query(
        'select * from -',
        (err, res) => {
            
        }
    )
}

module.exports = {

};