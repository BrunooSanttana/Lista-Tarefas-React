import React from "react";
//import "../Main.js";
import { BiCheck } from "react-icons/bi";

export default function Concluir({ index, concluirTarefas, tarefa }) {
  if (concluirTarefas.indexOf(index) === -1) {
    return tarefa;
  } else {
    return (
      <>
        <s>{tarefa}</s> - <strong>Tarefa Concluida </strong>
        <BiCheck />
      </>
    );
  }
}
