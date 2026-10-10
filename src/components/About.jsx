/** Explica el propósito educativo y los conceptos que demuestra el proyecto. */
export default function About() {
  // Contenido estático: no necesita estado ni eventos para explicar el proyecto.
  return (
    <section id="nosotros" className="about-section section-space">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5">
            <p className="eyebrow">SOBRE ESTE PROYECTO</p>
            <h2>Un ejemplo para aprender React.</h2>
            <div className="about-art" aria-hidden="true">
              <span>FS.</span>
              <small>DUOC UC · EJEMPLO REACT</small>
            </div>
          </div>
          <div className="col-lg-7">
            <p className="about-lead">Duoc UC - Ejemplo Catalogo React</p>
            <p className="text-secondary">
              Este proyecto es un ejemplo educativo para estudiantes de Duoc UC. Utiliza
              un catálogo de productos para mostrar cómo construir un sitio completo en
              React, organizado en componentes reutilizables. Los productos y precios son
              datos de muestra para practicar; no representan una tienda real.
            </p>
            <div className="row g-4 mt-3">
              <div className="col-sm-6">
                <h3 className="h5">Componentes y datos</h3>
                <p className="text-secondary">
                  Header, catálogo, tarjetas y footer permiten estudiar la composición de
                  interfaces, el uso de props y el renderizado de listas desde un archivo
                  JSON.
                </p>
              </div>
              <div className="col-sm-6">
                <h3 className="h5">Estilos e interacción</h3>
                <p className="text-secondary">
                  Bootstrap organiza el diseño responsive y el CSS propio ajusta su
                  apariencia. El menú móvil y el formulario demuestran el uso de estado y
                  eventos en React.
                </p>
              </div>
            </div>
            <p className="text-secondary">
              Puedes explorar el código, modificar los datos y adaptar los componentes
              como ejercicio. El formulario valida los campos, pero no envía mensajes a un
              servidor.
            </p>
            <a href="#catalogo" className="text-link">
              Explorar el catálogo de ejemplo ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
