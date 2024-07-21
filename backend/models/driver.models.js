const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    phoneNo: {
        type: String,
        required: true,
        unique: true
    },
    licenseNo: {
        type: String,
        required: true,
        unique: true
    },
    carNo: {
        type: String,
        required: true,
        unique: true
    },
    ambulanceType: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export const Driver = mongoose.model('Driver', driverSchema);

