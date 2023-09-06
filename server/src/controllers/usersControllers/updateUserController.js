const {User} = require('../../db.js');

const updateUserController = async(id,
    country,
    adress_st,
    adress_num,
     department,
      zip)=>{
    const userToUpdate = await User.findByPk(id);
    if (!userToUpdate) throw new Error (`User with ${id} doesn't exist`);

        const dataToUpdate = {
            country: country || userToUpdate.country,
            department: department || userToUpdate.department,
            adress_st: adress_st ,
            adress_num: adress_num ,
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