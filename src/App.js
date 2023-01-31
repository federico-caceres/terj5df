import React, { Component } from 'react';

class App extends Component {

  state = {
    firstName:'',
    lastName: '',
    userList: []
  }

  changeFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  changeLastName = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  insertUser = (e) =>{
    e.preventDefault();
    this.setState({
      userList: [...this.state.userList, {'firstName':this.state.firstName, 'lastName':this.state.lastName}],
      firstName:'',
      lastName: ''
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={ this.insertUser }>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.firstName} onChange={this.changeFirstName} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.lastName} onChange={this.changeLastName}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary" onClick={this.insertUser}>Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.userList.map( (el, i) =>{
                  return  <tr key={i}>
                            <td>{el.firstName}</td>
                            <td>{el.lastName}</td>
                          </tr>
                })
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


