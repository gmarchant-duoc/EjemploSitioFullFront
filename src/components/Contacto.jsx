/** Valida el formulario en el navegador; el envío a un servicio está pendiente. */
import { useState } from 'react';
export default function Contacto() {
  // El texto de confirmación es estado: actualizarlo refresca el mensaje visible.
  const [status, setStatus] = useState('');
  // Conserva la validación nativa, pero reemplaza sus textos por mensajes en español.
  function handleInvalid(event) {
    const field = event.target;
    // Quitar el error personalizado permite evaluar las reglas nativas del campo.
    field.setCustomValidity('');

    if (field.validity.valueMissing) {
      field.setCustomValidity(
        field.name === 'asunto'
          ? 'Selecciona un motivo de consulta.'
          : 'Completa este campo.',
      );
    } else if (field.validity.typeMismatch || field.validity.patternMismatch) {
      field.setCustomValidity(
        'Ingresa un correo electrónico válido, por ejemplo: nombre@correo.com.',
      );
    } else if (field.validity.tooLong) {
      field.setCustomValidity(`Usa como máximo ${field.maxLength} caracteres.`);
    } else if (!field.validity.valid) {
      field.setCustomValidity('Revisa el valor de este campo.');
    }
  }

  function handleInput(event) {
    // Elimina el error anterior para que el navegador pueda validar el nuevo valor.
    event.target.setCustomValidity('');
    setStatus('');
  }
  // El navegador verifica required y type=email antes de ejecutar este handler.
  // Sustituir la demostración por la llamada al servicio de contacto.
  function handleSubmit(event) {
    // Impide el envío HTML tradicional y la recarga; React gestiona el resultado.
    event.preventDefault();
    setStatus(
      'Tus datos están validados. Este formulario es una demostración: el mensaje no se ha enviado.',
    );
  }
  return (
    <section id="contacto" className="contact-section section-space">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <p className="eyebrow">FORMULARIO DE EJEMPLO</p>
            <h2>Practica la interacción en React.</h2>
            <p className="text-secondary mt-4">
              Completa los campos para probar la validación del navegador y el manejo de
              eventos. Este ejercicio no envía mensajes ni almacena los datos.
            </p>
            <div className="contact-note">
              <span aria-hidden="true">↗</span>
              <p>
                Explora cómo funcionan los campos.
                <br />
                <strong>Aprende probando.</strong>
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            {/* onInvalid captura errores de los campos; onInput limpia errores al editar. */}
            {/* Los campos son no controlados: su valor lo conserva el navegador. */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              onInvalid={handleInvalid}
              onInput={handleInput}
              onChange={() => setStatus('')}
            >
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="nombre">
                    Nombre
                  </label>
                  <input
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    required
                    maxLength={100}
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="correo">
                    Correo electrónico
                  </label>
                  <input
                    className="form-control"
                    id="correo"
                    name="correo"
                    type="email"
                    // Exige usuario@dominio.extensión sin espacios; no verifica existencia.
                    pattern={'[^\\s@]+@[^\\s@]+\\.[^\\s@]+'}
                    autoComplete="email"
                    placeholder="tu@correo.com"
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="asunto">
                    Asunto
                  </label>
                  <select
                    className="form-select"
                    id="asunto"
                    name="asunto"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona un motivo
                    </option>
                    <option>Consulta sobre un producto</option>
                    <option>Consulta sobre el proyecto</option>
                    <option>Otra consulta</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="mensaje">
                    Mensaje
                  </label>
                  <textarea
                    className="form-control"
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="¿Cómo podemos ayudarte?"
                    required
                    maxLength={2000}
                  />
                </div>
                <div className="col-12">
                  <p className="form-disclaimer">
                    Formulario de demostración. El envío todavía no está habilitado.
                  </p>
                  <button type="submit" className="btn btn-dark">
                    Validar mensaje ↗
                  </button>
                </div>
              </div>
              {/* role=status anuncia el cambio de mensaje a lectores de pantalla. */}
              <p className="form-status mb-0" role="status">
                {status}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
