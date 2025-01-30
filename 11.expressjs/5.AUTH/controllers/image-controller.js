const Image=require("../models/Image");
const {uploadToCloudinary}=require("../helpers/cloudinaryHelper")
const uploadImageController=async (req , res)=>{
    try{

        if(!req.file){
            return res.status(400).json({
                success:false ,
                message :'File is required , Please UPload an Image '
            })


        }
      
         //upload to Cloudinary
         
        const {url , publicId}=await uploadToCloudinary(req.file.path);

        //store the image url and public id along with the uploaded user id 
        const newlyuploadedImage=new Image({
             url,
             publicId ,
             uploadedBy : req.userInfo.userId
        })

        await newlyuploadedImage.save();

        res.status(201).json({
            success :true,
            message :"Image Uploaded ",
            image : newlyuploadedImage
        })


    } catch(error){
        console.log(error);
        res.status(500).json({
            success : false,
            message :'Something went wrong '
        })
    }

   
}
module.exports={
    uploadImageController
}