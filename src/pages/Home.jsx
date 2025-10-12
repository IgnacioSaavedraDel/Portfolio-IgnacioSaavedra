import CardGrid from "../components/molecules/CardGrid";
import { useState } from "react";

function Home() {
  const [active, setActive] = useState("Inicio");

  return (
    <div>
      <main className="flex flex-col py-24 items-center justify-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-6">
          <img
            className="w-full h-full scale-175 object-cover"
            src="/proyectos/delcanto.webp"
            alt="Avatar"
          />
        </div>
        <h1 className="lg:text-3xl text-xl mb-5 text-gray-800">
          Ignacio Saavedra Del Canto
        </h1>

        <CardGrid />
      </main>
    </div>
  );
}

export default Home;
