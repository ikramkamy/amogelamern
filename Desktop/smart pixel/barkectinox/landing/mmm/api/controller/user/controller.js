// const user = require('../../../model/user');
const modelUser = require('../../../model/user');  // importer le model



  const registerUser = async (req,res) => {
  const { NomUser} = req.body;
  const { PrenomUser } = req.body;
  const { EmailUser} = req.body;
  const { TelUser } = req.body;
  const { CorporateUser} = req.body;
  const { ActivityUser} = req.body;
  const { JobUser } = req.body;
  const { TypeWebSiteUser} = req.body;
  


  const user = new modelUser ({
    NomUser,
    PrenomUser,
    EmailUser,
    TelUser,
    CorporateUser,
    ActivityUser,
    JobUser,
    TypeWebSiteUser
  });


 await user.save();
res.status(200).json({
    message : "welcome aboard",
    data : user
})

}


const getUsers = async (req,res) => {
const users = await modelUser.find();
if(users) {
  res.status(200).json({
    message : 'fetch successfully',
    data : users
  })
}
else {
  res.status(500).json({
    message : 'does not exist',
    data : {}
  })
}
}






 module.exports = {
    registerUser,
 
    getUsers 
 }
