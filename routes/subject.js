const express = require('express')
const passport = require('passport');

const SubjectService = require('./../services/subject.service')
const validatorHandler=require('../middlewares/validator')
const { checkRoles } = require('./../middlewares/auth')
const{createSubjectSchema,getSubjectSchema,updateSubjectSchema}=require('./../schemas/subject')

const router = express.Router()
const service = new SubjectService

//GET

router.get('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','teacher'),
  async (req,res,next)=>{
	try{

		const subjects = await service.find()
		res.json(subjects);

	}catch(error){

		next(error)
	}
})

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','teacher'),
  async (req,res,next)=>{
	try{
		const { id } = req.params
		const student = await service.findOne(id)
		res.json(student) 

	}catch(error){

		next(error)

	}
})

// POST

router.post('/',
  
  validatorHandler(createSubjectSchema, 'body'),
  async (req,res,next)=>{
	try{
		const body = req.body
		const newStudent = await service.create(body)
		res.status(201).json(newStudent)
		
	}catch(error){
		next(error)
	}
})

//PATCH

router.patch('/:id',
	passport.authenticate('jwt', {session: false}),
	checkRoles('admin'),
	validatorHandler(updateSubjectSchema, 'body'),
	async (req,res,next )=>{
		try{
			const{id} = req.params
			const body=req.body
			const student = await service.update(id, body)
			res.json(student)
		}catch(error){
			next(error)
		}
})

//DELETE

router.delete('/:id', 
	passport.authenticate('jwt', {session: false}),
	checkRoles('admin'),
	async (req,res,next)=>{
		try{
			const {id} = req.params
			await service.delete(id)
			res.status(201).json({id})
		}catch(error){
			next(error)
		}
})

module.exports = router