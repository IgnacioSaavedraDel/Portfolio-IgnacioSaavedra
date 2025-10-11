function About() {
  return (
    <div className="max-w-6xl w-full mx-auto mt-10 p-8">
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        <div className="relative">
          <img
            src="/About.png"
            alt="Ranita"
            className="w-90 h-90 object-cover rounded-xl border-4 border-white shadow-md shadow-gray-200"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-70"></div>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-70"></div>
        </div>
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">
            Sobre mí
          </h2>
          <div className="h-1 w-96 bg-gradient-to-r bg-gray-200 mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            del es el proyecto musical de Ignacio Saavedra, productor y
            compositor chileno que explora la conexión entre lo digital y lo
            orgánico. Su sonido combina texturas suaves, ritmos experimentales y
            una sensibilidad melancólica que mezcla la precisión electrónica con
            un tono íntimo y humano.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed font-light mt-4">
            En su universo, las canciones funcionan como fragmentos de memoria:
            burbujas digitales, plantas que crecen entre glitchs y pulsos
            emocionales que oscilan entre la calma y el caos. Con letras que
            abordan el desapego, la nostalgia y la fugacidad de lo cotidiano,
            del construye paisajes sonoros que se sienten vivos, delicados y
            profundamente personales.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
