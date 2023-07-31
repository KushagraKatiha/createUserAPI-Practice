const userModel = require('../model/userModel.js')

exports.homeResponse=(req, res)=>{
    res.send(`<h1>Home page response</h1>`);
}

exports.twitterPage = (req, res)=>{
    res.send(`<h1>@kushagrakatiha</h1>`)
}

exports.createUser = async (req, res)=>{
    try {
        const {name, email} = req.body

        if(!name || !email){
            throw new Error ('Name and Email are required')
        }

        const userExists = await userModel.findOne({email})

        if(userExists){
            throw new Error ("User already Exists")
        }

        const newUser = await userModel.create({
            name, 
            email
        })

        res.status(201).json({
            success: true,
            message: "User created successfully"
        })
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}