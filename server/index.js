<<<<<<< HEAD
const server = require("./app");
const {conn} = require('./src/db');
=======
const server = require("./src/app")
>>>>>>> bfc6893f3fb8a649d4b56f25afabbbb2c9f280f7
require('dotenv').config();

const PORT = process.env.PORT || 3001

// server.listen(port, () => {
//     sequelize.sync({force:true,})
//     console.log('%s listening at 3001')
// })

conn.sync({ force: true })
.then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});