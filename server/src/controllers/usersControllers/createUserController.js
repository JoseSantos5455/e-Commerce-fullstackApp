const {User} = require('../../db.js');

const createUserController = async (name, email)=>{
    const newUserData = {
        name,
        email
        
    };
    const newUser = await User.create(newUserData);
    return newUser;
};

module.exports = createUserController;