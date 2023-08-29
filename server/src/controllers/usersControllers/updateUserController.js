const {User} = require('../../db.js');

const updateUserController = async(id,name,lastName,country,email,password,profile,address)=>{
    const userToUpdate = await User.findByPk(id);
    if (!userToUpdate) throw new Error (`User with ${id} doesn't exist`);

    const dataToUpdate = {
        name: name || userToUpdate.name,
        lastName: lastName || userToUpdate.lastName,
        country: country || userToUpdate.country,
        email:email || userToUpdate.email,
        password: password || userToUpdate.password,
        profile: profile || userToUpdate.profile,
        address: address || userToUpdate,
    };
    const [rowsUpdated,[userUpdated]] = await User.update(
        dataToUpdate,
        {where:{id:id},
        returning:true}
    );
    return userUpdated;
};

module.exports = updateUserController;