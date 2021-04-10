const Founder = require('../models/founder');

module.exports.getFounders = async(req, res) => {
    try{
        const founders = await Founder.find({});
        res.send(founders)
    }catch(e){
        res.send(e).status(500);
    }
}

module.exports.getFounder = async(req, res) => {
    try{
        const founder = await Founder.find({_id: req.params.id});
        res.send(founder)
    }catch(e){
        res.send(e).status(500);
    }
}
module.exports.createFounder = async (req, res) => {
   
    try {
        const founder = new Founder( req.body
            //companyId: req.company._id
        );
        await founder.save();
        res.send(founder).status(201)
    } catch(e){
        res.send(e).status(500);
    }
}

module.exports.updateFounder = async (req, res) => {
    try{
        const allowedUpdate = [
            "firstName",
            "lastName",
            "position",
            "photo"
        ];
        const updates = Object.keys(req.body);
        const isAllowedUpdate = updates.every(update=>allowedUpdate.includes(update));
        if(!isAllowedUpdate){
            return res.send({error: 'Invalid updates'}).status(400);
        }
        updates.forEach(update=>req.founder[update] = req.body[update]);
        await req.founder.save();
        res.send(req.founder);

    }catch(e){
        res.send(e).status(500)
    }
}

module.exports.deleteFounder = async (req, res) => {
    try {
      const founder = await Founder.findByIdAndDelete({
          _id: req.params.id
      });
      if(!founder){
          res.send().status(404);
      }
      res.end(founder)
    }catch(e){
        res.send(e).status(500);
    }
}
