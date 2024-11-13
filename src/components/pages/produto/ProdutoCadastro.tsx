import { useState, useEffect } from "react"
import { Produto } from "../../../models/Produto"
import { Categoria } from "../../../models/Categoria"

function ProdutoCadastro() {
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [preco, setPreco] = useState("")
    const [categorias, setCategorias] = useState<Categoria[]>([])

    useEffect(() => {
        fetch(" http://localhost:5262/categoria/listar")
        .then(resposta => resposta.json())
        .then(categorias => setCategorias(categorias))
    });

    function enviarProduto(e: any) {
        e.preventDefault()

        const produto: Produto = {
            nome: nome,
            descricao: descricao,
            quantidade: Number(quantidade),
            preco: Number(preco)
        }

        fetch("http://localhost:5262/produto/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        })
        .then(resposta => {
            if (!resposta.ok) 
                console.log("Deu ruim!")
            else {
                console.log("Deu boa")
            }
        })
    }

    return (
        <div id="cadastrar-produto">
            <form onSubmit={enviarProduto}>
                <div>
                    <label htmlFor="nome-produto">Nome: </label>
                    <input type="text" name="nome-produto" onChange={(e: any) => setNome(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição: </label>
                    <input type="text" name="descricao" onChange={(e: any) => setDescricao(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="quantidade-produto">Quantidade: </label>
                    <input type="number" name="quantidade-produto" min="1" onChange={(e: any) => setQuantidade(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="preco-produto">Preço: </label>
                    <input type="number" name="preco-produto" min="1" onChange={(e: any) => setPreco(e.target.value)} required />
                </div>
                    <input type="submit" value="Cadastrar"/>

                <div>
                    <select onChange={(e: any) => console.log(e)}>
                        {categorias.map(c => (
                            <option value={c.id} key={c.id}>{c.nome}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
        
    )
}

export default ProdutoCadastro;