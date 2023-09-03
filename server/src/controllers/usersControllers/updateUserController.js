const {User} = require('../../db.js');

const updateUserController = async(id,name,
    email,
    country,
    adress_st,
    adress_num,
     department,
      zip)=>{
    const userToUpdate = await User.findByPk(id);
    if (!userToUpdate) throw new Error (`User with ${id} doesn't exist`);

        const dataToUpdate = {
            name: name || userToUpdate.name,
            country: country || userToUpdate.country,
            email:email || userToUpdate.email,
            department: department || userToUpdate.department,
            adress_st: adress_st || userToUpdate,
            adress_num: adress_num || userToUpdate,
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