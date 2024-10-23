import { useEffect } from "react";

function ProdutoListar() {
    // Biblioteca AXIOS
    useEffect(() => {
        fetch("https://viacep.com.br/ws/80740050/json")
        .then(resposta => {
            return resposta.json()
        .then(cep => {
            console.log(cep);
        })
        });
    });
    return (
        <>
            <h1>Primeiro Post</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente nulla laborum placeat tempora ad iusto veniam eligendi itaque officia debitis maxime, labore ipsum dolor hic id numquam, omnis libero?</p>
        </>
    );
}

export default ProdutoListar;