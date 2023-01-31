const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required:[true, "please provide a emaild id"],
        unique: [true, "email already exist"],
        match: [/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/, "Please provide a vailid email"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password length should be greater than 6 characters"],
        select: false,
    },
    userType: {
        type: String,
        required: [true, "User Type is required"],
        select: false,
    },
    resetPasswordToken : String,
    resetPasswordExpire: Date,

});


UserSchema.pre("save", async function(next) {
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password, this.password)
};

UserSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(16).toString('hex');
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 5 *(60*1000);

    return resetToken
};
UserSchema.methods.getSignedToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})
};


const User = mongoose.model("User", UserSchema);
module.exports = User;