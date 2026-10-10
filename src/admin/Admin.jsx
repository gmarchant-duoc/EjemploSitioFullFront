import { useState } from 'react';
import Logo from '../components/Logo';
import productos from '../data/productos.json';
import Login from './Login';

/** El estado muestra el panel tras el login; no constituye autenticación real. */
export default function Admin() {
  // Estado local en memoria: false muestra Login y true muestra el panel.
  // No se persiste; recargar crea el componente nuevamente con false.
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="admin-page">
      <header className="site-header">
        <div className="container py-3 d-flex flex-wrap justify-content-between align-items-center gap-3">
          <a href="/" className="navbar-brand">
            <Logo />
          </a>
          <a href="/" className="btn btn-outline-dark">
            Volver al sitio
          </a>
        </div>
      </header>
      <main className="container py-5">
        {/* Renderizado condicional: solo se monta una de las dos vistas. */}
        {loggedIn ? (
          <section aria-labelledby="admin-title">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
              <div>
                <p className="eyebrow">ESPACIO DE ADMINISTRACIÓN</p>
                <h1 id="admin-title" className="h2">
                  Panel de ejemplo
                </h1>
              </div>
              <button className="btn btn-outline-dark" onClick={() => setLoggedIn(false)}>
                Cerrar sesión
              </button>
            </div>
            <p className="alert alert-info">
              Acceso de demostración sin comprobar credenciales. Al recargar la página se
              vuelve al login.
            </p>
            <div className="card">
              <div className="card-body">
                <h2 className="h4">Productos del catálogo</h2>
                <p className="text-secondary">
                  Vista de consulta de los {productos.length} productos definidos en el
                  archivo JSON.
                </p>
                <div className="table-responsive">
                  <table className="table align-middle mb-0">
                    <caption>Datos de muestra del catálogo público.</caption>
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio (CLP)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Desestructuramos los datos y usamos el ID como key de cada fila. */}
                      {productos.map(({ id, nombre, precio }) => (
                        <tr key={id}>
                          <th scope="row">{id}</th>
                          <td>{nombre}</td>
                          <td>${Number(precio).toLocaleString('es-CL')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        ) : (
          // Una función enviada como prop permite que el hijo solicite cambiar al padre.
          <Login onLogin={() => setLoggedIn(true)} />
        )}
      </main>
    </div>
  );
}
