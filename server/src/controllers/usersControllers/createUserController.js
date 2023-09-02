const {User} = require('../../db.js');

const createUserController = async (name,  email, country, adress_st, adress_num, department, zip)=>{
    const newUserData = {
        name,
        email,
        country,
        adress_st,
        adress_num,
         department,
          zip
        
    };
    const newUser = await User.create(newUserData);
    return newUser;
};

module.exports = createUserController;