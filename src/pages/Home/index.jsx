import "./styles.css";

import { Card } from "../../components/Card";

export function Home() {
  return (
    <div className="container">
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Lista de presença" />
      <button type="button">Adicionar</button>

      <Card />
      <Card />
      <Card />
    </div>
  );
}
