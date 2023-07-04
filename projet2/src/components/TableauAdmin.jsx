import React, { useEffect, useState } from "react";

const TableauAdmin = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5174/api/meubles/allmeubles");
      const newData = await response.json();
      setItem(newData);
    };

    fetchData();
    
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