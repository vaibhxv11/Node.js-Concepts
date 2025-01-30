const User=require('../models/User')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
//Register Controller

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    
    //check if the user is already exist or not

    const checkExistingUser=await User.findOne({$or : [{username , email}]});
    if(checkExistingUser){
        return res.status(400).json({
            success:false,
            message :"User is already present with smae email or username"

        })

    }
    
    //hash user password
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password , salt)

    const newCreatedUser=new User({
        username ,
        email,
        password:hashedPassword,
        role :role || 'user'
    })
    
    await newCreatedUser.save();

    if(newCreatedUser){
        res.status(201).json({
            success:true,
            message:'User Registered Successfully',
            data:newCreatedUser
        })
    }  else
    {
        res.status(400).json({
            success: false,
            message: "Unable to register user , Try Again",
          });

    }

  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error Occured , Try Again",
    });
  }
};

//Login Controller

const loginUser = async (req, res) => {
  try {

     const {username , password}=req.body;

     const user=await User.findOne({username})

     if(!user){
      return res.status(400).json({
        success:false,
        message :"User does not exist!"
      })
     }
  
     const isPasswordMatch=await bcrypt.compare(password , user.password)
      
     if(!isPasswordMatch){
      return res.status(400).json({
        success:false,
        message :"Invalid Credentials"
      })
     }

     const accessToken=jwt.sign({
      userId: user._id ,
      username : user.username ,
      role:user.role,

     } , process.env.JWT_SECRET_KEY , {
      expiresIn : '60m'
     })

     res.status(200).json({
      success:true,
      message :'Logged IN Successfull',
      accessToken
     })
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error Occured , Try Again",
    });
  }
};

module.exports = { registerUser, loginUser };
