function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Contacto de ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:tu@correo.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-3xl w-full mx-auto mt-10 p-8">
      <section className="bg-gray-50 border-6 border-white rounded-xl px-6 py-4 shadow-xl shadow-gray-200">
        <div className="py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contáctame
          </h2>
          <p className="mb-8 font-light text-center text-gray-500 sm:text-xl">
            Responderé a la brevedad
          </p>
          <form onSubmit={handleSubmit} action="#" className="space-y-8">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tu email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="correo@correo.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Cuéntame que podemos hacer juntos"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tu mensaje
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-green-500 focus:border-green-500 "
                placeholder="¿Qué tienes en mente?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 "
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
