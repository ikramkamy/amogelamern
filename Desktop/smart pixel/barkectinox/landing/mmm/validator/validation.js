const { String } = require("joi");
const joi = require("joi");

module.exports = {
  postUser: {
    body: {
      NomUser    = joi.string().required(),
      PrenomUser = joi.string().required(),
      EmailUser = joi.string().required(),

      TelUser     = joi.string().required(),
      CorporateUser  = joi.string().required(),
      ActivityUser = joi.string().required(),

      JobUser     = joi.string().required(),
      TypeWebSiteUser   = joi.string().required(),
      
    },
  }
}