import React, { useState } from 'react';
import { ITarefa } from '../types/tarefa';
import Cronometro from '../componentes/Cronometro';
import Formulario from '../componentes/formulario';
import Lista from '../componentes/Lista';
import sytle from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: 'React',
      tempo: '02:00:00'
    },
    {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    },
    {
        tarefa:'Typescript',
        tempo: '05:00:00'
    }]);
  return (
    <div className={sytle.AppStyle}>
       <Formulario setTarefas={setTarefas} />
       <Lista tarefas={tarefas}/>
       <Cronometro />
    </div>
  );
}

export default App;
