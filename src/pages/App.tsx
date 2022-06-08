import React, { useState } from 'react';
import { ITarefa } from '../types/tarefa';
import Cronometro from '../componentes/Cronometro';
import Formulario from '../componentes/formulario';
import Lista from '../componentes/Lista';
import sytle from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionado: ITarefa){
    setSelecionado(tarefaSelecionado);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionado.id ? true : false
    })));
  }

  function finalizarTarefa(){
    if (selecionado){
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={sytle.AppStyle}>
       <Formulario setTarefas={setTarefas} />
       <Lista 
         tarefas={tarefas} 
         selecionaTarefa={selecionaTarefa}/>
       <Cronometro 
         selecionado={selecionado}
         finalizarTarefa={finalizarTarefa}
       />
    </div>
  );
}

export default App;
