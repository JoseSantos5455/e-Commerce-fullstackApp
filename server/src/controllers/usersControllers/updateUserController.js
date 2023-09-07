const {User} = require('../../db.js');

const updateUserController = async(id,
    country,
    address_st,
    address_num,
     department,
      zip)=>{
    const userToUpdate = await User.findByPk(id);
    if (!userToUpdate) throw new Error (`User with ${id} doesn't exist`);

        const dataToUpdate = {
            country: country || userToUpdate.country,
            department: department || userToUpdate.department,
            address_st: address_st || userToUpdate,
            address_num: address_num || userToUpdate,
            zip: zip || userToUpdate.department,
        };
    const [rowsUpdated,[userUpdated]] = await User.update(
        dataToUpdate,
        {where:{id:id},
        returning:true}
    );
    return userUpdated;
};

module.exports = updateUserController;