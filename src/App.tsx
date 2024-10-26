import React from 'react';
import ProdutoListar from './ProdutoListar';

function App() {
  return (
    <div className='centralizar'>
      <h1>Projeto em React!</h1>
      <p>Seja muito bem vindo(a) ao meu primeiro website feito usando da biblioteca React</p>
      <ProdutoListar nome='Brian Santos' />
    </div>
  )
}

export default App;
