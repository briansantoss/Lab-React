import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";

function ProdutoListar() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        fetch("http://localhost:5262/produto/listar")
        .then(resposta => resposta.json())
        .then(produtos => setProdutos(produtos))
    })

    return (
        <>
            <p>Listagem de produtos</p>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Criado Em</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        produtos.map(produto => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.criadoEm}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProdutoListar;