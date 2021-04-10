const mongoose = require('mongoose');

require('dotenv').config();

const companySchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, "Please enter company name"]
    },
    city: {
        type: String, 
        trim :true,
        require: [true, "Please enter city"]
    },
    state: {
        type: String, 
        trim : true,
        required: [true, "Please enter state"]
    },
    street:{
        type: String,
        trim : true
    },
    foundedDate: {
        type: Date,
        trim: true,
        required: [true, "Please enter founded date"]
    },
    description: {
        type: String, 
        trim: true
    },
    logo:{
        type: Buffer,
        default: ""
    }
},  {
    timestamps: true
});

companySchema.virtual("founders", {
    ref: "Founder",
    localField: "_id",
    foreignField: "company"
});

companySchema.set('toObject', {virtuals: true});
companySchema.set('toJSON', { virtuals: true });


const Company = mongoose.model('Company', companySchema);

module.exports = Company;






