import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
  return (
    <div className="container">
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Lista de presença" />
      <button type="button">Adicionar</button>

      <Card name="Gabriel" time="10:11" />
      <Card name="Leo" time="10:14" />
      <Card name="Ana" time="13:14" />
    </div>
  );
}
