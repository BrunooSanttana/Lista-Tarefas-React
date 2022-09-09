import React from "react";

import Concluir from "./concluir.js";

import Proptypes from "prop-types";

//TarefasS
import { FaEdit, FaWindowClose } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";

import "./Tarefas.css";

export default function Tarefas({
  tarefas,
  concluirTarefas,
  handleEdit,
  handleDelete,
  handleDone,
}) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          <Concluir
            index={index}
            concluirTarefas={concluirTarefas}
            tarefa={tarefa}
          />
          <span>
            <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
            <BiCheck onClick={(e) => handleDone(e, index)} className="done" />
          </span>
        </li>
      ))}
    </ul>
  );
}
Tarefas.propTypes = {
  tarefas: Proptypes.array.isRequired,
  handleEdit: Proptypes.func.isRequired,
  handleDelete: Proptypes.func.isRequired,
  handleDone: Proptypes.func.isRequired,
};
