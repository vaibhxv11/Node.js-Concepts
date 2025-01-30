const express = require('express');
const app = express();

// root route
app.get("/", (req, res) => {
    res.send("Welcome to our new home page");
});

app.get("/products", (req, res) => {
    const products = [
        {
            id: 1,
            name: "product 1"
        },
        {

            id: 2,
            name: "product 2"

        },
        {

            id: 3,
            name: "product 3"

        },
        {

            id: 4,
            name: "product 4"

        },
        {

            id: 5,
            name: "product 5"

        },
        
    ]

    res.json(products);
})

app.get('/products/:id' , (req , res)=>{
    const productId=parseInt(req.params.id)

    const products = [
        {
            id: 1,
            name: "product 1"
        },
        {

            id: 2,
            name: "product 2"

        },
        {

            id: 3,
            name: "product 3"

        },
        {

            id: 4,
            name: "product 4"

        },
        {

            id: 5,
            name: "product 5"

        },
        
    ]

    const getSingleProduct=products.find(product=> product.id===productId)
     
    if(getSingleProduct){
        res.json(getSingleProduct)
    } else
    {
        res.status(404).send("Product does not found")
    }

})
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
