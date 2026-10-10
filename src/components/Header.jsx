/** Controla el menú móvil con React y conserva la navegación por anclas. */
import { useState } from 'react';
import Logo from './Logo';
export default function Header() {
  // useState devuelve el valor actual y una función que lo actualiza.
  // Al cambiar open, React renderiza de nuevo este componente: no se edita el DOM a mano.
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <nav
          className="navbar navbar-expand-md container"
          aria-label="Navegación principal"
        >
          <a
            className="navbar-brand"
            href="#inicio"
            aria-label="FS. Duoc UC - Ejemplo Catalogo React, inicio"
          >
            {/* Reutilizamos el mismo componente visual que en Footer y Admin. */}
            <Logo />
          </a>
          {/* onClick recibe una función; se ejecuta al pulsar, no durante el render. */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="menu-principal"
            aria-expanded={open}
            aria-label="Abrir o cerrar menú"
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* La clase show y aria-expanded reflejan el mismo estado del menú. */}
          <div
            id="menu-principal"
            className={`collapse navbar-collapse ${open ? 'show' : ''}`}
          >
            <ul className="navbar-nav ms-auto align-items-md-center gap-md-4">
              {/* map genera un enlace por entrada; key identifica cada elemento. */}
              {[
                ['inicio', 'Inicio'],
                ['catalogo', 'Catálogo'],
                ['nosotros', 'Nosotros'],
              ].map(([id, label]) => (
                <li className="nav-item" key={id}>
                  {/* El ancla navega a la sección y el evento cierra el menú móvil. */}
                  <a className="nav-link" href={`#${id}`} onClick={() => setOpen(false)}>
                    {label}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a className="nav-link" href="/admin.html">
                  Admin
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-dark nav-contact"
                  href="#contacto"
                  onClick={() => setOpen(false)}
                >
                  Contacto ↗
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
