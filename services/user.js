
const models = require('../db/models');
const bcrypt = require('bcrypt')
const boom = require('@hapi/boom')

class User{

	constructor(){
		
	}
	

	async create(data){

		const hash = await bcrypt.hash(data.passwordstudent,10)
		const newStudent = await models.TB_Usuario.create({
			...data,
			passwordstudent:hash
		})
		delete newStudent.dataValues.passwordstudent
		return newStudent
	}

	async find(){
		const student= await models.TB_Usuario.findAll()
		return student
	}

	async findOneLogin(Nombre_Usuario ){
		const rta = await models.TB_Usuario.findOne({
			where: { Nombre_Usuario }
		  });
		  return rta;
	}


	async findOne(id){
		const student = await models.TB_Usuario.findByPk(id);
   		if (!student) {
      		throw boom.notFound('User not found');
    	}
    	return student;
	}

	async update(id,changes){
		const student = await this.findOne(id)
		const rta = await student.update(changes)
		return rta
	}

	async delete(id){
		const student = await this.findOne(id);
    	await student.destroy();
    	return { id };
	}
}

module.exports= User
