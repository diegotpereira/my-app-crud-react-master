//import axios from 'axios';

import http from "../http-common";




class FuncionarioService {

    buscarFuncionarios() {

        return http.get("/funcionarios");
        
    }

    criarFuncionario(funcionario) {

        return http.post("/funcionarios", funcionario);
        //return http.post("/tutorials", data);
    }

    buscarFuncionarioPorId(id) {

        //return http.get(FUNCIONARIO_API_BASE_URL + '/' + funcionarioId);
        return http.get(`/funcionarios/${id}`);
    }

    alterarFuncionario(funcionario, id) {

        return http.put(`/funcionarios/${id}`, funcionario);
    }

    deletarFuncionario(id) {

        return http.delete(`/funcionarios/${id}`);
    }
}

export default new FuncionarioService()