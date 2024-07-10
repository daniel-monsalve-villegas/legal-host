function Contact() {
  return (
    <div
      name="contacto"
      className="w-full h-screen flex flex-col justify-center items-center bg-contact-bg text-white font-roboto"
    >
      <h2 className="text-9xl">Contacto</h2>
      <p className="text-5xl">
        Dejanos tus datos y permítenos saber qué podemos hacer por ti
      </p>
      <form className="flex flex-col w-3/5 mt-6 p-3">
        <label htmlFor="name" className="text-4xl pb-1">
          Nombre Completo
        </label>
        <input
          name="name"
          type="text"
          placeholder="camilo rodriguez"
          className="h-12 mb-3"
        />
        <label htmlFor="email" className="text-4xl pb-1">
          Correo Electrónico
        </label>
        <input
          name="email"
          type="email"
          placeholder="ejemplo@correo.com"
          className="h-12 mb-3"
        />
        <textarea
          name="message"
          id="messageId"
          cols="30"
          rows="10"
          className="mt-5"
        ></textarea>
      </form>
    </div>
  );
}

export default Contact;