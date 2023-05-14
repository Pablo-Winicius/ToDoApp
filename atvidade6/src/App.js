import React, { useState, useEffect } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState([]); //Const para armazenar uma lista
  const [input, setInput] = useState(""); //const para pegar informações digitadas no input

  function ButtonAdd() {
    setTarefas([...tarefas, { input, id: Date.now() }]); //...spread, junta as informações em uma array
    //Date.now: é um gerador de id's aleatórias
    setInput(""); //Deixar o input vazio toda vez que eu adicionar um item
  }

  function Deletar(id) {
    //deletar cada item com a sua identidade própria
    setTarefas(
      tarefas.filter((item) => {
        //filtra todos os itens da minha array [tarefas]
        return item.id !== id; //retorne na minha lista item que tenha identidade diferente
        //001 002 003 004 e não 001 001 001 001 001, quero que seja !== diferente
      })
    );
  }

  return (
    <>
      <h1> Lista de tarefas </h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => ButtonAdd()}> Add </button>

      <div>
        {/* Faça um mapeamento dos itens da minha array */}
        {tarefas.map((item) => (
          <ul>
            {/* Cada item vai ter uma chave/id (key) */}
            <li key={item}> {item.input} </li>
            {/* <li key={item}> {item.id} </li> */}
            {/* Detelar um item que tenha identidade */}
            <button onClick={() => Deletar(item.id)}>Deletar </button>
          </ul>
        ))}
      </div>
    </>
  );
}

