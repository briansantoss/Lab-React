import { useEffect, useState } from "react";

function ConsultarCEP() {
    const [cep, setCep] = useState("")
    const [bairro, setBairro] = useState("")
    const [estado, setEstado] = useState("")
    const [logradouro, setLogradouro] = useState("")

    // Biblioteca AXIOS
    useEffect(() => {
        fetch("http://localhost:5262/produto/cadastrar")
        .then(resposta => {
            return resposta.json()
        .then(produtos => {
            console.log(produtos)
        })
        })
    })

    function carregarCEP() {
        fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(resposta => resposta.json())
        .then(cepRecebido => {
            setBairro(cepRecebido.bairro)
            setEstado(cepRecebido.estado)
            setLogradouro(cepRecebido.logradouro)
        })
    }

    return (
        <>
            <h1>Consultar CEP</h1>
            <input placeholder="Digite o CEP" onChange={(e : any) => setCep(e.target.value)}></input>
            <input type="submit" value="Enviar" onClick={carregarCEP}/>
            <p>{bairro}</p>
            <p>{estado}</p>
            <p>{logradouro}</p>
        </>
    );
}

export default ConsultarCEP