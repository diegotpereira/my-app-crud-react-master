import React, { Component} from 'react'
import FuncionarioService from '../services/FuncionarioService'


class ListaFuncionarioComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            funcionarios: []
        }
        this.addFuncionario = this.addFuncionario(this);
        this.editFuncionario = this.editFuncionario(this);
        this.deletarFuncionario = this.deletarFuncionario(this);
    }
    deletarFuncionario(id) {
        FuncionarioService.deletarFuncionario(id).then( res => {
            this.setState({ funcionarios: this.state.funcionarios.filter(funcionario => funcionario.id !== id)});
        });
    }

    verFuncionario(id) {
        this.props.history.push(`/ver-funcionario/${id}`);
    }

    editFuncionario(id) {
        this.props.history.push(`/add-funcionario/${id}`);
    }

    componentDidMount() {

        FuncionarioService.buscarFuncionarios().then((res) => {
            this.setState({funcionarios: res.data});
        });
    }

    addFuncionario() {
        this.props.history.push('/add-funcionario/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Funcionários</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addFuncionario}>Novo Funcionário</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nome do Funcionário</th>
                                <th>Sobrenome do Funcionário</th>
                                <th>E-mail do Funcionário</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.funcionarios.map(
                                    funcionario => 
                                    <tr key={funcionario.id}>
                                        <td>{funcionario.nome}</td>
                                        <td>{funcionario.sobreNome}</td>
                                        <td>{funcionario.emailId}</td>
                                        <td>
                                            <button onClick={()=> this.editFuncionario(funcionario.id)} className="btn btn-info">Alterar</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deletarFuncionario(funcionario.id)} className="btn btn-danger">Excluir</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.verFuncionario(funcionario.id)} className="btn btn-info">Ver</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListaFuncionarioComponent