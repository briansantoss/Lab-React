import React, { useEffect } from "react";

function ProdutoListar({ nome }: { nome: string }) {
    return (
        <p>Bem vindo, { nome } !</p>
    )
}

export default ProdutoListar;