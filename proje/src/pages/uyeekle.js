import React, { useState } from "react";

import "./uyeekle.css";

function Uyeekle() {
  const [uyeler, setUyeler] = useState([
    { id: 1, name: "Ahmet", email: "ahmetcakar@gmail.com", rol: "Kaleci" },
    { id: 2, name: "Mehmet", email: "mehmet123@gmail.com", rol: "Defans" },
    { id: 3, name: "Salih", email: "Salih235@gmail.com", rol: "Atak" },
    { id: 4, name: "Faruk", email: "faruk@gmail.com", rol: "Forvet" },
  ]);

  const [newUye, setNewUye] = useState({ id: null, name: "", email: "", rol: "" });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setUyeler(
        uyeler.map((uye) => (uye.id === newUye.id ? newUye : uye))
      );
    } else {
      setUyeler([...uyeler, { ...newUye, id: uyeler.length + 1 }]);
    }
    setIsEditing(false);
    setNewUye({ id: null, name: "", email: "", rol: "" });
  };

  const handleEdit = (id) => {
    const uye = uyeler.find((uye) => uye.id === id);
    setIsEditing(true);
    setNewUye(uye);
  };

  return (
    <div>
      <h1>Takım Üyeleri</h1>
      {uyeler.map((uye) => (
        <div className="uyeler-en-dıs" key={uye.id}>
          <div>{uye.name}</div>
          <div>{uye.email}</div>
          <div>{uye.rol}</div>
          <button onClick={() => handleEdit(uye.id)}>Düzenle</button>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <label>
          İsim:
          <input
            type="text"
            value={newUye.name}
            onChange={(e) =>
              setNewUye({ ...newUye, name: e.target.value })
            }
          />
        </label>
        <label>
          E-posta:
          <input
            type="email"
            value={newUye.email}
            onChange={(e) =>
              setNewUye({ ...newUye, email: e.target.value })
            }
          />
        </label>

        
        <label>
          Rol:
          <input
            type="text"
            value={newUye.rol}
            onChange={(e) =>
              setNewUye({ ...newUye, rol: e.target.value })
            }
          />
        </label>
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
}

export default Uyeekle;
