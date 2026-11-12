/** Presenta el proyecto educativo y utiliza la primera imagen del catálogo como portada. */
export default function Inicio({ productos, cargando, error }) {
  const destacado = productos[0];
  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <p className="eyebrow">APRENDE CON UN EJEMPLO</p>
            <h1>
              Un catálogo.
              <br />
              Muchas formas de <span>aprender.</span>
            </h1>
            <p className="hero-description">
              Explora un sitio de ejemplo para estudiantes de Duoc UC: componentes de
              React, datos de productos y diseño responsive con Bootstrap y CSS propio.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-dark btn-lg" href="#catalogo">
                Explorar catálogo ↗
              </a>
              <a className="btn btn-outline-dark btn-lg" href="#nosotros">
                Conoce el proyecto
              </a>
            </div>
            <p className="hero-note">
              — Un proyecto para explorar, modificar y practicar.
            </p>
          </div>
          <div className="col-lg-6">
            {cargando && <p role="status">Cargando portada del catálogo…</p>}
            {error && <p role="alert">No se pudo cargar la portada del catálogo.</p>}
            {!cargando && !error && !destacado && <p>No hay productos destacados.</p>}
            {destacado && (
              <div className="hero-image-wrap">
                <img
                  src={destacado.imagen}
                  alt={destacado.nombre}
                  className="hero-image"
                />
                <div className="hero-image-label">
                  <small>Datos de muestra</small>
                  <strong>Catálogo React.</strong>
                </div>
                <span className="hero-sticker" aria-hidden="true">
                  REACT
                  <br />+ CSS
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="benefits">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <span>01</span> Componentes reutilizables
            </div>
            <div className="col-md-4">
              <span>02</span> Diseño responsive
            </div>
            <div className="col-md-4">
              <span>03</span> Aprendizaje práctico
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
