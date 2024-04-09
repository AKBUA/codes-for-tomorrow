const { Sequelize } = require('sequelize');
const connection=async()=>{
    const sequelize = new Sequelize({

        database:process.env.DB_DATABASE,
        username:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
            dialect:process.env.DB_DIALECT,
            port:process.env.DB_PORT,
            host:process.env.DB_HOST
    
    
    });
      try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true}).then(()=>{
          console.log("database synchronized")
        }).catch((er)=>{
console.log("Database synchronized error",er)
        })
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
module.exports=connection