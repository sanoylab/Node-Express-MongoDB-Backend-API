const Company = require('../models/company');
const Founder = require('../models/founder');

module.exports.getCompanies = async(req, res) => {
    try{
        const comapanies = await Company.find({}).populate({path: 'founders', select: 'firstName lastName position'});
        res.status(200).json({success: true, data: comapanies})
    }catch(e){
        res.status(400).json({success: false, message:err.message});
    }
}

module.exports.getCompany = async(req, res) => {
    try{
        const company = await Company.find({_id: req.params.id}).populate({path: 'founders', select: 'firstName lastName position'});
        res.status(200).json({success: true, data: company})
    }catch(e){
        res.status(400).json({success: false, message:err.message});
    }
}
module.exports.createCompany = async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.send({company}).status(201)
    } catch(e){
        res.send(e).status(500);
    }
}

module.exports.updateCompany = async (req, res) => {
    try{
        const allowedUpdate = [
            "name",
            "city",
            "state",
            "street",
            "foundedDate",
            "description",
            "logo"
        ];
        const updates = Object.keys(req.body);
        const isAllowedUpdate = updates.every((update)=>allowedUpdate.includes(update));
        if(!isAllowedUpdate){
            return res.send({error: 'Invalid updates'}).status(400);
        }

        const company = await Company.findOne({_id: req.params.id});
        if(!company) {
            return res.status(404).send();
        }
        updates.forEach(update=>(company[update] = req.body[update]));
        await company.save();
        res.send(company);

    }catch(e){
        res.send(e).status(500)
    }
}

module.exports.deleteCompany = async (req, res) => {
    try {
      const company = await Company.findByIdAndDelete({
          _id: req.params.id
      });
      if(!company){
          res.send().status(404);
      }
      res.end(company)
    }catch(e){
        res.send(e).status(500);
    }
}
