const {User} = require('../../db.js');

const getUserByIdController = async (id) => {
    const user = await User.findByPk(id);
    return user;
};

module.exports = getUserByIdController;