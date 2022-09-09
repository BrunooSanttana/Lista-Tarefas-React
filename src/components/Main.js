import React, { Component } from "react";
import Form from "./Form";
import Tarefas from "./Tarefas";

import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
    concluirTarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));
    if (tarefas) {
      this.setState({ tarefas });
    }
    const concluirTarefas = JSON.parse(localStorage.getItem("concluirTarefas"));
    if (concluirTarefas) {
      this.setState({ concluirTarefas });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas !== prevState.tarefas) {
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }
    const { concluirTarefas } = this.state;

    if (concluirTarefas !== prevState.concluirTarefas) {
      localStorage.setItem("concluirTarefas", JSON.stringify(concluirTarefas));
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (this.state.index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    } else {
      novasTarefas[this.state.index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    const { concluirTarefas } = this.state;
    const novoConcluir = [...concluirTarefas];
    novoConcluir.splice(novoConcluir.indexOf(index), 1);

    this.setState({
      tarefas: [...novasTarefas],
      concluirTarefas: [...novoConcluir],
    });
  };

  handleDone = (e, index) => {
    const { concluirTarefas } = this.state;
    const novoConcluir = [...concluirTarefas];

    if (novoConcluir.indexOf(index) === -1) {
      this.setState({
        concluirTarefas: [...novoConcluir, index],
      });
    } else {
      novoConcluir.splice(novoConcluir.indexOf(index), 1);
      this.setState({
        concluirTarefas: [...novoConcluir],
      });
    }
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };
  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas, concluirTarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          concluirTarefas={concluirTarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          handleDone={this.handleDone}
        />
      </div>
    );
  }
}
