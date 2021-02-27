const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('eventos', 'root', 'Mafs1920', {
    host: 'localhost',
    dialect: 'mysql'
    // dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

( async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

})()

module.exports = sequelize;