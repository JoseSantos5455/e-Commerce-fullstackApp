const {User} = require('../../db.js');

const deleteUserController = async (id)=>{
    const userToDelete = await User.findByPk(id);
    if (!userToDelete) throw new Error ('User not found');

    await userToDelete.update({isActive:false});
    return userToDelete;
};

module.exports = deleteUserController;