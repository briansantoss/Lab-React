import { useState } from "react"
import { Produto } from "../../../models/Produto"

function ProdutoCadastro() {
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [preco, setPreco] = useState("")

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
                "Content-type": "application/json"
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
                    <input type="text" name="nome-produto" onChange={(e: any) => setNome(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="descricao">Descrição: </label>
                    <input type="text" name="descricao" onChange={(e: any) => setDescricao(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="quantidade-produto">Quantidade: </label>
                    <input type="number" name="quantidade-produto" min="1" onChange={(e: any) => setQuantidade(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="preco-produto">Preço: </label>
                    <input type="number" name="preco-produto" min="1" onChange={(e: any) => setPreco(e.target.value)}/>
                </div>
                    <input type="submit" value="Cadastrar"/>
            </form>
        </div>
        
    )
}

export default ProdutoCadastro;