import CardGrid from "../components/molecules/CardGrid";
import { useState } from "react";

function Home() {
  const [active, setActive] = useState("Inicio");

  return (
    <main className="flex flex-col py-48 items-center justify-center <-10">
      <h1 className="text-3xl mb-5 text-gray-800">
        Ignacio Saavedra Del Canto
      </h1>

      <CardGrid />
    </main>
  );
}

export default Home;
