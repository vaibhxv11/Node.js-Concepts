const Product=require('../models/Product')

const insertSampleProducts=async (req , res)=>{
    try{
    
      const sampleProducts= [
        {
          "name": "Laptop",
          "category": "Electronics",
          "price": 50000,
          "inStock": true,
          "tags": ["laptop", "electronics", "computers"]
        },
        {
          "name": "Wireless Mouse",
          "category": "Electronics",
          "price": 500,
          "inStock": true,
          "tags": ["mouse", "electronics", "accessories"]
        },
        {
          "name": "Bluetooth Headphones",
          "category": "Electronics",
          "price": 2000,
          "inStock": true,
          "tags": ["headphones", "electronics", "audio"]
        },
        {
          "name": "Smartphone",
          "category": "Electronics",
          "price": 30000,
          "inStock": false,
          "tags": ["smartphone", "electronics", "mobile"]
        },
        {
          "name": "Running Shoes",
          "category": "Clothing",
          "price": 3500,
          "inStock": true,
          "tags": ["shoes", "clothing", "sports"]
        },
        {
          "name": "T-shirt",
          "category": "Clothing",
          "price": 500,
          "inStock": true,
          "tags": ["t-shirt", "clothing", "casual"]
        },
        {
          "name": "Jeans",
          "category": "Clothing",
          "price": 1500,
          "inStock": true,
          "tags": ["jeans", "clothing", "fashion"]
        },
        {
          "name": "Washing Machine",
          "category": "Appliances",
          "price": 25000,
          "inStock": false,
          "tags": ["washing machine", "appliances", "home"]
        },
        {
          "name": "Refrigerator",
          "category": "Appliances",
          "price": 35000,
          "inStock": true,
          "tags": ["refrigerator", "appliances", "kitchen"]
        },
        {
          "name": "Smart TV",
          "category": "Electronics",
          "price": 45000,
          "inStock": true,
          "tags": ["tv", "electronics", "home entertainment"]
        }
      ]
      const result=await Product.insertMany(sampleProducts)
      res.status(201).json({
        success:true,
        data :result,
        message : "Inserted Successfully"
      })


          
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message :'some error occured'
        })
    }
}
 

const getProductStats=async (req , res)=>{
    try{
        const result=await Product.aggregate([
            {
                $match: {
                  inStock :false,
                  price :{
                    $gte:100,
                  }
                }
            } ,
           {
            $group :{
              _id: "$category",
              avgPrice :{
                $avg :"$price"
              } ,
              count :{
                $sum :1
              }
            }

           }
        ])

        res.status(200).json({
          success:true,
          data : result,
          message : "Data Fetched successfully"
        });

    } catch(e)
    {
        console.log(e);
        res.status(500).json({
            message :"Internal Server Error"
        })
    }
}

const getProductAnalysis=async (req , res)=>{
  
  try{
       const result=await Product.aggregate([
        {
          $match:{
            category:'Electronics'
          }
        }
        ,
        {
          $group :{
            _id:null ,
            totalRevenue :{
              $sum :'$price'
            } ,
             averagePrice :{
              $avg:'$price'
             } ,
             maxPriceProduct:{
              $max :'$price'
             } ,
             minPriceProduct:{
              $min:'$price'
             }

          }
        }
       ])

       res.status(200).json({
        success:true,
        message :"Fetched Successfully" ,
        data :result
       })
  } catch(e)
  {
    res.status(500).json({
      success :false ,
      message :"Internal Server Error"
    })
  }
}

module.exports={insertSampleProducts ,getProductStats , getProductAnalysis}