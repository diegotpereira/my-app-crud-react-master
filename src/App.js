import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ListaFuncionarioComponent from './components/ListaFuncionarioComponent';
import CriarFuncionarioComponent from './components/CriarFuncionarioComponent';
import AlterarFuncionarioComponent from './components/AlterarFuncionarioComponent';
import verFuncionarioComponent from './components/verFuncionarioComponent';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path= "/" exact component = {ListaFuncionarioComponent}></Route>
              <Route path= "/funcionarios" component = {ListaFuncionarioComponent}></Route>
              <Route path= "/add-funcionario/:id" component = {CriarFuncionarioComponent}></Route>
              <Route path= "/ver-funcionario/:id" component = {verFuncionarioComponent}></Route>
            </Switch>
          </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
