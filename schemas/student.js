const Joi=require('joi')

const id_card_student=Joi.string().min(5).max(10)
const id_card_guardian=Joi.string().min(5).max(10)
const firstnamestudent=Joi.string().min(2).max(40)
const secondnamestudent=Joi.string().min(2).max(40)
const firstlastnamestudent=Joi.string().min(2).max(40)
const secondlastnamestudent=Joi.string().min(2).max(40)
const phonenumberstudent=Joi.string().min(6).max(10)
const emailstudent=Joi.string().min(10).max(100)
const provincestudent=Joi.string().min(4).max(60)
const districtstudent=Joi.string().min(3).max(60)
const corregimientostudent=Joi.string().min(3).max(60)
const photostudent=Joi.string().max(100)
const passwordstudent=Joi.string().min(6).max(10)
const fk_id_group=Joi.string().min(6).max(10)

const createStudentSchema=Joi.object({
    id_card_student: id_card_student.required(),
    firstnamestudent: firstnamestudent.required(),
    secondnamestudent:secondnamestudent,
    firstlastnamestudent: firstlastnamestudent.required(),
    secondlastnamestudent: secondlastnamestudent,
    phonenumberstudent: phonenumberstudent.required(),
    emailstudent: emailstudent,
    provincestudent: provincestudent.required(),
    districtstudent: districtstudent.required(),
    corregimientostudent: corregimientostudent.required(),
    photostudent: photostudent,
    passwordstudent:passwordstudent.required(),
    fk_id_group:fk_id_group.required()

})
const updateStudentSchema=Joi.object({
    id_card_student: id_card_student,
    firstnamestudent: firstnamestudent,
    secondnamestudent:secondnamestudent,
    firstlastnamestudent: firstlastnamestudent,
    secondlastnamestudent: secondlastnamestudent,
    phonenumberstudent: phonenumberstudent,
    emailstudent: emailstudent,
    provincestudent: provincestudent,
    districtstudent: districtstudent,
    corregimientostudent: corregimientostudent,
    photostudent: photostudent,
    passwordstudent:passwordstudent,
    fk_id_group:fk_id_group
})

const addGuardianSchema=Joi.object({
    id_card_student: id_card_student,
    id_card_guardian: id_card_guardian.required()
})

const getStudentSchema=Joi.object({
    id_card_student: id_card_student.required()
})

module.exports={createStudentSchema,updateStudentSchema,getStudentSchema,addGuardianSchema}