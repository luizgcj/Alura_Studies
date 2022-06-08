import React from 'react';
import style from './Botao.module.scss';

interface Props {
    children?: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

function Botao ({children, type, onClick}: Props) {
    return (
      <button 
          onClick={onClick} 
          type={type} className={style.botao}>
          {children}
      </button>
    )
}


export default Botao;