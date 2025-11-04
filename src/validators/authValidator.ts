import Joi from 'joi'

// validation des donnees d'inscriptions

export const registerSchema = Joi.object({
    name: Joi.string().min(4).max(50).required(),
    email: Joi.string().email().required(),
    passaword: Joi.string().min(12).required()
})