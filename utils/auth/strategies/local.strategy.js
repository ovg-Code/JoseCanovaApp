const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService = require('./../../../services/user');
const service = new UserService();

const LocalStrategy = new Strategy({
    usernameField: 'Nombre_Usuario',
    passwordField: 'Contraseña'
  },
  async (Nombre_Usuario,Contraseña, done) => {
    try {
      const user = await service.findOneLogin(Nombre_Usuario);
      if (!user) {
        done(boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(Contraseña, user.Contraseña);
      if (!(Contraseña === user.Contraseña)) {
        console.log(Contraseña)
        console.log(user.Contraseña)
        done(boom.unauthorized(), false);
      }
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;