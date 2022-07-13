// Crie uma class component
// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.
// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)
import React, { Component } from "react";
import "./styles.css";
class App extends Component {
  state = {
    nome: "Wallace",
    idade: 21,
    comidaFavorita: "Filé à Parmegiana",
    musicasPreferidas: ["Santo:", "Rise:", "Lilith:"]
  };
  render() {
    return (
      <div className="container">
        <h1>Olá, eu sou {this.state.nome},</h1>
        <h2>tenho {this.state.idade} anos e</h2>
        <h3>Minha comida favorita é {this.state.comidaFavorita}!</h3>
        <h4>Meu top 3 em músicas favoritas são:</h4>
        <ol>
          <li>{this.state.musicasPreferidas[0]} do cantor Jão;</li>
          <li>{this.state.musicasPreferidas[1]} um estilo meio AMV;</li>
          <li>{this.state.musicasPreferidas[2]} da cantora Bea duarte;</li>
        </ol>
      </div>
    );
  }
}
export default App;
