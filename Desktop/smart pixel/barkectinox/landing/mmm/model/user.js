const { string } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  NomUser : {
    type: String,
  },

  PrenomUser: {
    type: String,
  },

    EmailUser :  {
      type : String,
  },

  TelUser :  {
    type : String,
},

CorporateUser :  {
    type : String,
},

ActivityUser :  {
    type : String,
},

JobUser :  {
    type : String,
},

TypeWebSiteUser :  {
    type : String,
},


}, {timestamps : true});

const user = mongoose.model("USER", userSchema);

module.exports = user;