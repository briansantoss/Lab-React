import React from 'react';
import ProdutoListar from './components/pages/produto/ProdutoListar';
import ProdutoCadastro from './components/pages/produto/ProdutoCadastro';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import ConsultarCEP from './components/samples/ConsultarCEP';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pages/produto/listar">Listar Produtos</Link>
          </li>
          <li>
            <Link to="/pages/produto/cadastrar">Cadastrar Produtos</Link>
          </li>
          <li>
            <Link to="/pages/endereço/consultar">Consultar Endereço</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoListar />} />
        <Route path="/pages/produto/listar" element={<ProdutoListar />} />
        <Route path="/pages/produto/cadastrar" element={<ProdutoCadastro />} />
        <Route path="/pages/endereco/consultar" element={<ConsultarCEP />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
