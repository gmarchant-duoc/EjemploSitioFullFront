/** Pie compartido con enlaces a las secciones y año calculado al cargar el módulo. */
import Logo from './Logo';
const currentYear = new Date().getFullYear();
// Se calcula al cargar el módulo, fuera del render; no requiere estado interactivo.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <a
              href="#inicio"
              className="footer-brand"
              aria-label="FS. Duoc UC - Ejemplo Catalogo React, inicio"
            >
              <Logo />
            </a>
            <p className="mt-3">
              Proyecto educativo para estudiantes.
              <br />
              React, Bootstrap y CSS propio.
            </p>
          </div>
          <div className="col-6 col-md-3">
            <h2 className="h6">Explora</h2>
            <a href="#catalogo">Catálogo</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="col-6 col-md-3">
            <h2 className="h6">Practica con el formulario</h2>
            <p>Ejemplo de validación de campos.</p>
            <a href="#contacto">Ver formulario ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {currentYear} FS. Duoc UC - Ejemplo Catalogo React · Proyecto educativo.
          </span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  );
}
