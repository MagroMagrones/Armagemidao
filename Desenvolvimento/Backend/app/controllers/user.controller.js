const userModel = require('../models/user.model')

module.exports = {
  getAll: async () => {
    const users = await userModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (users.length > 0) return users
    else return []
  },
  get: async payload => {
    const user = await userModel
      .findAll({
        where: {
          ...payload
        }
      })
      .then()
      .catch(err => console.log(err))

    if (user.length > 0) return user
    else return []
  },
  set: async data => {
    const resCreateUser = await userModel
      .create(data)
      .then()
      .catch(err => {
        console.log(err)
      })
    if (!resCreateUser.dataValues.id)
      return { err: 'Falha ao cadastrar usuário' }
    else
      return {
        message: 'Usuário cadastrado com sucesso',
        id: resCreateUser.dataValues.id
      }
  },
  update: async (id, payload) => {
    const resUpdateUser = await userModel
      .update({ ...payload }, { where: { id: id } })
      .then()
      .catch(err => {
        console.log(err)
      })

    return { message: `Registro alterado com sucesso` }
  }
}
