userModel = require('../models/user.model')

module.exports = {
  getAll: async () => {
    users = await userModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (users.length > 0) return users
    else return []
  },
  get: async id => {
    user = await userModel
      .findAll({
        where: {
          id: id
        }
      })
      .then()
      .catch(err => console.log(err))

    if (user.length > 0) return user
    else return []
  },
  set: async data => {
    resCreateUser = await userModel
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
  update: async (id, data) => {
    let payload = {}
    if (data.nome) payload.nome = data.nome
    if (data.email) payload.email = data.email

    resUpdateUser = await userModel
      .update({ ...payload }, { where: { id: id } })
      .then()
      .catch(err => {
        console.log(err)
      })

    console.log(resUpdateUser)
    return { message: `Registros alterados: ${resUpdateUser}` }
  }
}
