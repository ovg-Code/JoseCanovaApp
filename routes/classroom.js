const express = require('express')
const passport = require('passport');
const { checkRoles } = require('./../middlewares/auth')

const ClassroomService =require('./../services/classroom.service')
const validatorHandler=require('../middlewares/validator')
const {createClassroomSchema,getClassroomSchema,updateClassroomSchema} = require('./../schemas/classroom')

const router = express.Router()
const service = new ClassroomService()
//GET

router.get('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin','teacher'),
  async (req,res,next)=>{
	try{

		const classroom = await service.find()
		res.json(classroom);

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
		const classroom = await service.findOne(id)
		res.json(classroom) 

	}catch(error){

		next(error)

	}
})

// POST

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(createClassroomSchema, 'body'),
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
  validatorHandler(updateClassroomSchema, 'body'),
	async (req,res,next )=>{
		try{
			const{id} = req.params
			const body=req.body
			const classroom = await service.update(id, body)
			res.json(classroom)
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