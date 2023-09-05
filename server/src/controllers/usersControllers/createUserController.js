const {User} = require('../../db.js');

const createUserController = async (name,  email, country, address_st, address_num, department, zip)=>{
    const newUserData = {
        name,
        email,
        country,
        address_st,
        address_num,
        department,
        zip,
    };
    console.log(email);

    const newUser = await User.findOrCreate(
        {where:{email:email},
         defaults:newUserData});
    return newUser[0];
};

module.exports = createUserController;