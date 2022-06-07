import React, { useState } from 'react';
import { ITarefa } from '../types/tarefa';
import Cronometro from '../componentes/Cronometro';
import Formulario from '../componentes/formulario';
import Lista from '../componentes/Lista';
import sytle from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  return (
    <div className={sytle.AppStyle}>
       <Formulario setTarefas={setTarefas} />
       <Lista tarefas={tarefas}/>
       <Cronometro />
    </div>
  );
}

export default App;
