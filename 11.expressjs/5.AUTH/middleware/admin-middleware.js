

const isAdminUser=(req , res , next)=>{
     
    if(req.userInfo.role!=="admin"){
        res.status(403).json({
            success:false ,
            message :"Access Denied ! Admin Rights required"
        })
    }
    next();
}

module.exports=isAdminUser