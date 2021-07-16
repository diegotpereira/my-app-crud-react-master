import axios from 'axios';

const FUNCIONARIO_API_BASE_URL = "http://localhost:8080/api/v1/funcionarios";

class FuncionarioService {

    buscarFuncionarios() {

        return axios.get(FUNCIONARIO_API_BASE_URL);
    }

    criarFuncionario(funcionario) {

        return axios.post(FUNCIONARIO_API_BASE_URL, funcionario);
    }

    buscarFuncionarioPorId(funcionarioId) {

        return axios.get(FUNCIONARIO_API_BASE_URL + '/' + funcionarioId);
    }

    alterarFuncionario(funcionario, funcionarioId) {

        return axios.put(FUNCIONARIO_API_BASE_URL + '/' + funcionarioId, funcionario) ;
    }

    deletarFuncionario(funcionarioId) {

        return axios.delete(FUNCIONARIO_API_BASE_URL + '/' + funcionarioId);
    }
}

export default new FuncionarioService()