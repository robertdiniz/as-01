import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect, setState } from "react";
import { useParams, redirect } from "react-router-dom";

function Editar() {
    const { id } = useParams();
    const [despesa, setDespesa] = useState([]);
    const [data, setData] = useState([]);
    const [valor, setValor] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [categorias, setCategorias] = useState([]);

    // GET - Despesa
    useEffect(() => {
        fetch(`http://localhost:8000/despesas/${id}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setDespesa(data);
                setValor(data.valor);
                setData(data.data);
                setCategoria(data.categoria);
            })
            .catch((err) => console.log(err));
    }, []);

    // Get - Categorias
    useEffect(() => {
        fetch(`http://localhost:8000/categorias/`, {
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

    // Update(Patch) - Despesa
    const handleSubmit = (e) => {
        e.preventDefault();

        const despesa = {
            categoria: categoria,
            valor: valor,
            data: data,
        };

        fetch(`http://localhost:8000/despesas/${id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(despesa),
        })
            .then((response) => {response.json()}
            )
            .catch((error) => {
                console.error("Erro:", error);
            });
    };

    const handleChange = (event) => {
        setValor(event.target.value);
    };

    return (
        <div className="App">
            <h1>Editando Despesa</h1>
            <div>
                <a href="/" className="Nova-Despesa">
                    Home
                </a>
            </div>
            <div className="Add-Despesas">
                {despesa && (
                    <form onSubmit={handleSubmit} className="Form-Despesas">
                        <img
                            src={
                                "http://localhost:8000" +
                                despesa.categoria_imagem
                            }
                            alt="imagem da categoria"
                            width="60px"
                            style={{ margin: "0 auto" }}
                        />
                        <label>Categoria:</label>
                        <select onChange={(e) => setCategoria(e.target.value)}>
                            <option value="">Selecionar uma categoria</option>
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
                            onChange={handleChange}
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
                            value="Editar"
                            className="BTN-Despesa"
                            onClick={handleSubmit}
                        />
                    </form>
                )}
            </div>
        </div>
    );
}

export default Editar;
