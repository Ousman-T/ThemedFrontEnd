// * Request handler logic
const Reachout = require('../../models/contact');

// * Logic to create a contact

async function create(req, res){
    try{
        console.log('inside controller');
        const contact = await Reachout.create(req.body);
        console.log(contact);
        res.json(contact);
    }catch(error){
        console.log(error);
        res.status(400).json(error)
    }
};
async function remove(req, res){
    const {_id} = req.body
    const contact = Reachout.findByIdAndDelete(_id)
    .then(() => {
        console.log('Contact deleted');
        res.status(200).json(Reachout);
    })
    .catch((error) => console.error(error));
};




module.exports = {
    create,
    remove
}