const options = {
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "ecommerce1"
        
    },
    pool: {min: 0, max: 10},
};

module.exports = {
    options
}
    

