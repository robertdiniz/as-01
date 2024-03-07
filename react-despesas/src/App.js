import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

const urlDespesas = "http://localhost:8000/despesas/";

function App() {
    const [despesas, setDespesas] = useState([]);

    // 1.1 resgatando despesas
    useEffect(() => {
        fetch(urlDespesas, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setDespesas(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, []);

    // Deletando despesa
    const deleteDespesa = async (id) => {
        const res = await fetch(`http://localhost:8000/despesas/${id}`, {
            method: "DELETE",
        }).catch((err) => console.log(err));
    };

    return (
        <div className="App">
            <h1>Registro de Despesas</h1>

            <div>
                <a href={`/criar`} className="Nova-Despesa">
                    CRIAR NOVA DESPESA
                </a>
            </div>

            <div className="Cards-Container">
                {despesas.map((despesas) => (
                    <div className="Card-Despesa">
                        <img
                            src={
                                "http://localhost:8000" +
                                despesas.categoria_imagem
                            }
                            alt="imagem"
                            className="Card-Image"
                        />
                        <p className="Card-Category">{despesas.categoria}</p>
                        <p className="Card-Price">R$-{despesas.valor}</p>
                        <p className="Card-Date">{despesas.data}</p>
                        <div className="Cards-Options">
                            <img
                                src="./edit.png"
                                alt="ícone de edição"
                                className="Cards-Option"
                                title="Editar"
                            />
                            <img
                                src="./delete.png"
                                alt="ícone de deletar"
                                className="Cards-Option"
                                title="Deletar"
                                onClick={() => deleteDespesa(despesas.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
