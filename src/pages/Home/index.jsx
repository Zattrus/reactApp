import React, { useState } from "react";
import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState();

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Gabriel" time="10:11" />
      <Card name="Leo" time="10:14" />
      <Card name="Ana" time="13:14" />
    </div>
  );
}
