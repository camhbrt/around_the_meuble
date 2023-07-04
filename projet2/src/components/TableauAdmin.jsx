import React, { useEffect, useState } from "react";

const TableauAdmin = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5174/api/meubles").then((response) =>
      setItem(response.data)
    );
  }, []);
  console.log(item);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Meuble</th>
            <th>Prix</th>
            <th>Statut</th>
            <th>Action</th>
          </tr>
        </thead>
        {item.map((meuble) => (
          <tr>
            <td>{meuble.nom}</td>
            <td>{meuble.prix}</td>
            <td>{meuble.statut}</td>
            <td>
              <button id="modify">M</button>
              <button id="delete">D</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableauAdmin;
