const express = require('express')


const studentRouter = require('./student')
const teacherRouter =require('./teacher')
const guardianRouter =require('./guardian')
const classroomRouter =require('./classroom')
const groupRouter =require('./group')
const laboratoryRouter =require('./laboratory')
const subjectRouter =require('./subject')
const authRouter = require('./auth');
const schedule = require('./schedule');
function routerApi(app){
	const router = express.Router()
	app.use('/api/v1',router)
	router.use('/Student',studentRouter)
	router.use('/teacher',teacherRouter)
	router.use('/guardian',guardianRouter)
	router.use('/classroom',classroomRouter)
	router.use('/group',groupRouter)
	router.use('/laboratory',laboratoryRouter)
	router.use('/subject',subjectRouter)
	router.use('/auth', authRouter);
	router.use('/schedule', schedule);
}	

module.exports = routerApi
 