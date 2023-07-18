const model = require('../usermodel');
const jwt = require('jsonwebtoken')
const createUser = async function(req,res){
    try{

        const data = req.body;
        const { name, email, mobile ,password} = data 

        let createdata = await model.create({ name, mobile, email, password })
        return res.status(201).send({ status: true, data: createdata })
    }catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}


const login = async function (req, res) {
    try {
    let email = req.body.email;
    let password = req.body.password;
    if(!email || email === ""){
        return res.status(400).send({status : false , msg : "you have to provide email for login"})
    }else
     email= email.trim()
    if(!password || password === ""){
        return res.status(400).send({status : false , msg : "you have to provide password for login"})
    }else
    password = password.trim()
    
        let author = await model.findOne({ email: email, password: password });
        if (!author)
            return res.status(400).send({
                status: false,
                msg: "username or the password is not correct",
            });


        let token = jwt.sign(
            {
                authorId: author._id.toString(),
                batch: "Lithium",
                project: "project1",
            },
            "functionup-secret-key"
        );

        res.setHeader("x-api-key", token);
        res.status(200).send({ status: true, msg: "Successfully-logged-in", data: token });

    } catch (Err) {
        return res.status(500).send({ status: false, msg: Err.message });
    }
};


// Exporting modules for using in router.
module.exports.createUser = createUser; 
module.exports.login = login;