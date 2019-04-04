import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

/*import { userServices } from '../../services/userServices';*/

const headerProps = {
  icon: 'users',
  title: 'Usuarios',
  subtitle: 'Cadastro do usuario no sistema bb-watch'
}

// const baseUrl = 'http://localhost/3001/users'
const baseUrl = 'http://bbwatch.ga:3210/data'

const initialState = {
  user: { name: '', email: '' },
  list: []
}

export default class User extends Component {
  state = { ...initialState }

  componentWillMount() {
    axios.get(baseUrl).then(resp => {
      console.log(resp)

      this.setState({
        list: resp.data
      })
    })
  }

  clear() {
    this.setState({ user: initialState.user })
  }

  save() {
    const { user } = this.state
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user).then(resp => {
      const list = this.getUpdateList(resp.data)
      this.setState({ user: initialState.user, list })
    })
  }

  getUpdateList(user, add = true) {
    const list = this.state.list.filter(u => u.id !== user.id)
    if (add) list.unshift(user)
    return list
  }

  updateField(event) {
    const user = { ...this.state.user }
    user[event.target.name] = event.target.value
    this.setState({ user })
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-grup">
              <label>Nome:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={e => this.updateField(e)}
                placeholder="Digite o nome"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-Mail:</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={e => this.updateField(e)}
                placeholder="Digite o e-mail"
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={e => this.save(e)}>
              Salvar
            </button>

            <button
              className="btn btn-secondary ml-2"
              onClick={e => this.clear(e)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }

  load(user) {
    this.setState({ user })
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then(resp => {
      const list = this.getUpdateList(user, false)
      this.setState({ list })
    })
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome:</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{this.renderRowns()}</tbody>
      </table>
    )
  }

  renderRowns() {
    return this.state.list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning" onClick={() => this.load(user)}>
              <i className="fa fa-pencil" />
            </button>

            <button
              className="btn-dranger ml-2"
              onClick={() => this.remove(user)}
            >
              <i className="fa fa-trash" />
            </button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    )
  }
}
