import logo from "./logo.svg";
import "./App.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Editar() {
    const { id } = useParams();
    const [despesa, setDespesa] = useState([]);
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
                console.log("consegui", data);
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
                console.log("consegui", data);
            })
            .catch((err) => console.log(err));
    }, []);

    // Update(Patch) - Despesa
    const handleSubmit = (e) => {
        console.log("enviado!");
        
    };

    return (
        <div className="App">
            <h1>Editando Despesa</h1>
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
                        <select onClick={(e) => console.log(e.target.value)}>
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
                            value={despesa.valor}
                        />
                        <label>Data:</label>
                        <input type="date" name="data" value={despesa.data} />
                        <input
                            type="submit"
                            value="Editar"
                            className="BTN-Despesa"
                        />
                    </form>
                )}
            </div>
        </div>
    );
}

export default Editar;
