import React, { Component } from 'react'
import FuncionarioService from '../services/FuncionarioService'

class verFuncionarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            funcionario: {}
        }
    }

    componentDidMount() {
        FuncionarioService.buscarFuncionarioPorId(this.state.id).then( res => {
            this.setState({funcionario: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Ver Detalhes do Funcionárrio</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Nome do Funcionário: </label>
                            <div>{this.state.funcionario.nome}</div>
                        </div>
                        <div className="row">
                            <label>Sobrenome do Funcionário: </label>
                            <div>{this.state.funcionario.sobreNome}</div>
                        </div>
                        <div className="row">
                            <label>Email id Funcionário: </label>
                            <div>{this.state.funcionario.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default verFuncionarioComponent