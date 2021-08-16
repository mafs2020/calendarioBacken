const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('xxxxxx', 'xxxxxx', 'xxxxxxx', {
    host: 'localhost',
    dialect: 'mysql'
    // dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

( async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        // await sequelize.sync({ force: true });
        console.log('Se conecto a la base de datos.');
    } catch (error) {
        console.error('Ocurrio un erro al intentar conectar con la Base de Datos:', error);
    }
})()

module.exports = sequelize;
