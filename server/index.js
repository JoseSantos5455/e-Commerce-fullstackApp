const server = require("./src/app");
const {conn} = require('./src/db');
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