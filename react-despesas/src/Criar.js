import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";

const urlDespesas = "http://localhost:8000/despesas/";
const urlCategorias = "http://localhost:8000/categorias/";

function Criar() {
    const [despesas, setDespesas] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [valor, setValor] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(urlCategorias, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategorias(data);

            })
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const despesa = {
            categoria,
            valor,
            data,
        };

        const res = await fetch(urlDespesas, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(despesa),
        });

        // 3 - carregamento dinâmico

        const addedDespesa = res.json();

        setDespesas((prevDespesas) => [...prevDespesas, addedDespesa]);

        setCategoria("");
        setValor("");
        setData("");
    };

    return (
        <div className="App">
            <h1>Registrando Despesas</h1>
            <div className="Add-Despesas">
                <h2>Adicionando Despesas!</h2>
                <form onSubmit={handleSubmit} className="Form-Despesas">
                    <label>Categoria:</label>
                    <select onChange={(e) => setCategoria(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        {categorias.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.nome}
                            </option>
                        ))}
                    </select>
                    <label>Valor:</label>
                    <input
                        type="number"
                        name="valor"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                    <label>Data:</label>
                    <input
                        type="date"
                        name="data"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="Criar"
                        className="BTN-Despesa"
                    />
                </form>
            </div>
        </div>
    );
}

export default Criar;
