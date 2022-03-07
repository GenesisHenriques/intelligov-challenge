import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import './style.css';

export default function Table() {
  const [csv, setCsv] = useState(null);
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const data = useSelector((stdatate) => stdatate.reducerInteligov.csvFile);

  useEffect(() => {
    setCsv(data)
  }, [data]);

  useEffect(() => {
    console.log('foi');
  }, [setCsv]);

  const handlerRow = ({ target }, index) => {
    const header = csv.header;
    const data = csv.data;
    const newData = data.filter((item) => item !== csv.data[index]);
    setCsv({header, data: newData})
  };

  const handlerName = ({ target: { value } }) => {
    setName(value);
  };

  const handlerTelephone = ({ target: { value } }) => {
    setTelephone(value);
  };

  const handlerButtonAdd = () => {
    if (name === "") {
      window.alert("Digite um nome");
      return;
    } else if (telephone === "") {
      window.alert("Digite um telefone");
      return;
    }

    const header = csv.header;
    const data = csv.data;
    const newData = [...data, [
      csv.data.length + 1,
      name,
      telephone,
    ]];
    setCsv({header, data: newData})
    //const newData = data.push([name, telephone]);
  };

  return csv === null ? null : (
    <div className="container-table">
      <form className="form">
        <label>
          <input
            type="text"
            placeholder="Nome"
            onChange={(event) => handlerName(event)}
            required
          />
        </label>
        <label for="phone">
          <input
            type="number"
            id="phone"
            name="phone"
            required
            placeholder="(xx) xxxxx-xxxx"
            onChange={(event) => handlerTelephone(event)}
          />
        </label>

        <button
          type="button"
          onClick={() => handlerButtonAdd()}
        >
          Adicionar
        </button>
      </form>
      <br />
      <table className="table">
        <thead>
          <tr>
            {
              csv.header.map((headerName) => <th key={headerName}>{headerName}</th>)
            }
          </tr>
        </thead>
        <tbody>
        {
          csv.data.map((row, index) => (
            <tr key={index}>
              {
                row.map((column) => <td key={column}>{column}</td>)
              }
              <td className="td-button">
                <button
                  type="button"
                  onClick={ (event) => handlerRow(event, index) }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}