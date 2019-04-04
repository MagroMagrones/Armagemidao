contactModel = require('../models/contact.model')

module.exports = {
  getAll: async () => {
    contacts = await contactModel
      .findAll()
      .then()
      .catch(err => console.log(err))

    if (contacts.length > 0) return contacts
    else return []
  },
  get: async id => {
    return 'not implemented yet'
  },
  set: async data => {
    return 'not implemented yet'
  },
  update: async (id, data) => {
    return 'not implemented yet'
  }
}
