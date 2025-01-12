import React, { Component } from 'react'
import FuncionarioService from '../services/FuncionarioService'

class AlterarFuncionarioComponent extends Component {
    constructor(props) {
        super(props)


        this.state = {
            id: this.props.match.params.id,
            nome: '',
            sobreNome: '',
            emailId: ''
        }

        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeSobreNomeHandler = this.changeSobreNomeHandler.bind(this);
        this.salvarOuAlterarFuncionario = this.salvarOuAlterarFuncionario.bind(this);
    }

    componentDidMount() {
        FuncionarioService.buscarFuncionarioPorId(this.state.id).then( (res) => {
            let funcionario = res.data;
            this.setState({
                nome: funcionario.nome,
                sobreNome: funcionario.sobreNome,
                emailId: funcionario.emailId
            });
        });
    }

    alterarFuncionarioComponent = (e) => {
        e.preventDefault();

        let funcionario = {
            nome: this.state.nome,
            sobreNome: this.state.sobreNome,
            emailId: this.state.emailId
        }

        console.log('funcionario => ' + JSON.stringify(funcionario));
        console.log('id => ' + JSON.stringify(this.state.id));

        FuncionarioService.alterarFuncionario(funcionario, this.state.id).then( res=> {
            this.props.history.push('/funcionarios');
        });
    }

    changeSobreNomeHandler=(event) => {
        this.setState({sobreNome: event.target.value});
    }

    changeEmailHandler=(event) => {
        this.setState({emailId: event.target.value});
    }

    cancel() {
        this.props.history.push('/funcionarios');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Alterar Funcionário</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Nome: </label>
                                        <input placeholder="Digite o nome..." name="nome" className="form-control" value={this.state.nome} onChange={this.changeNomeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>SobreNome: </label>
                                        <input placeholder="Digite seu sobrenome" name="sobreNome" className="form-control" value={this.state.sobreNome} onChange={this.changeSobreNomeHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Email id: </label>
                                        <input placeholder="Digite seu email" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.salvarOuAlterarFuncionario}>Salvar</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlterarFuncionarioComponent