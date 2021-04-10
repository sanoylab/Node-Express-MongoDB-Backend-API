const mongoose = require('mongoose');

const founderSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, "Please enter firstname"]
    },
    lastName: {
        type: String, 
        trim: true,
        required: [true, "Please enter lastname"]
    },
    position: {
        type: String,
        trim: true,
        required: [true, "Please enter position"]
    }, 
    photo : {
        type: Buffer,
        default: ""
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        reference: 'Company',
        required: true
    }
}, {
    timestamps: true
});

const Founder = mongoose.model('Founder', founderSchema);

module.exports = Founder