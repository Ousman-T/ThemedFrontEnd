// * Request handler logic
const Reachout = require('../../models/contact');

// * Logic to create a contact

async function create(req, res){
    try{
        const contact = await Reachout.create(req.body);
        console.log(contact);
        res.json(contact);
    }catch(error){
        console.log(error);
        res.status(400).json(error)
    }
};




module.exports = {
    create
}