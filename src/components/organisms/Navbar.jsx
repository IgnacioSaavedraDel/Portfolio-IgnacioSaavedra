import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonItem from "../atoms/ButtonItem";
import SoundToggleButton from "../atoms/SoundToggleButton";

function Navbar() {
  const location = useLocation();
  const [active, setActive] = React.useState(
    location.pathname === "/"
      ? "Inicio"
      : location.pathname === "/about"
      ? "Sobre mí"
      : location.pathname === "/music"
      ? "Música"
      : location.pathname === "/produccion"
      ? "Producción"
      : location.pathname === "/contacto"
      ? "Contacto"
      : "Inicio"
  );

  // sonidos, musica y botones - empieza muteado por defecto :C porque sino me lo bloquea el navegador
  const [soundOn, setSoundOn] = React.useState(false);
  const clickSound = useRef(new Audio("/SeleccionNavBar.ogg"));
  const backgroundMusic = useRef(new Audio("/TemaFondo.ogg"));

  // volumen
  React.useEffect(() => {
    clickSound.current.volume = 0.3; // Botones más alto
  }, []);

  const toggleSound = () => {
    const newState = !soundOn;
    setSoundOn(newState);

    if (newState) {
      // musica bajita
      backgroundMusic.current.volume = 0.1; // Música baja
      backgroundMusic.current.loop = true;
      backgroundMusic.current.play();
    } else {
      // volumen cero
      backgroundMusic.current.volume = 0;
    }
  };

  const handleClick = (item) => {
    setActive(item.label);
    if (soundOn && clickSound.current) {
      clickSound.current.currentTime = 0; // Resetear para sonidos rápidos
      clickSound.current.play();
    }
  };

  const items = [
    { label: "Inicio", path: "/" },
    { label: "Sobre mí", path: "/about" },
    { label: "Música", path: "/music" },
    { label: "Producción", path: "/produccion" },
    { label: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="top-0 left-0 right-0 z-50 py-6 bg-gradient-to-b from-gray-100 to-transparent to-80%">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-3 text-gray-600 hover:text-green-500 transition-colors group"
            onClick={() => handleClick({ label: "Inicio", path: "/" })}
          >
            <img
              src="/Logos/Isotipo_Corporativo.webp"
              alt="Logo del canto."
              className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-5xl font-medium">del canto.</span>
          </Link>

          <div className="flex-1 flex justify-center">
            <ul className="flex gap-4">
              {items.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => handleClick(item)}
                >
                  <ButtonItem
                    label={item.label}
                    active={active === item.label}
                  />
                </Link>
              ))}
            </ul>
          </div>

          <SoundToggleButton soundOn={soundOn} onToggle={toggleSound} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
