/** Renderiza los datos del catálogo en columnas responsive de Bootstrap. */
import { useState } from 'react';
import productos from '../data/productos.json';
// Importar el JSON proporciona datos locales; aquí no se hace una llamada HTTP.
import Producto from './Producto';
import './Catalogo.css';

// Cambiar esta constante permite ajustar el tamaño de todas las páginas.
const PRODUCTOS_POR_PAGINA = 6;

export default function Catalogo() {
  // Solo guardamos la página elegida: los demás valores se calculan desde el JSON.
  // El setter provoca un nuevo render para mostrar las tarjetas correspondientes.
  const [paginaActual, setPaginaActual] = useState(1);

  // ceil redondea hacia arriba: 7 productos / 6 por página requiere 2 páginas.
  const totalPaginas = Math.ceil(productos.length / PRODUCTOS_POR_PAGINA);

  // Mantiene la selección dentro del rango si el catálogo se reduce durante desarrollo.
  // Para un catálogo vacío usamos 1 como referencia, pero no mostramos navegación.
  const paginaVisible = Math.min(paginaActual, Math.max(1, totalPaginas));

  // Los arrays comienzan en 0: la página 1 empieza en 0 y la página 2 en 6.
  const inicio = (paginaVisible - 1) * PRODUCTOS_POR_PAGINA;

  // slice devuelve una copia del tramo: incluye inicio y excluye el índice final.
  // No modifica el array original ni carga datos desde un servidor.
  const productosVisibles = productos.slice(inicio, inicio + PRODUCTOS_POR_PAGINA);
  const fin = inicio + productosVisibles.length;

  // Genera [1, 2, ...] para construir los botones numerados con map.
  const paginas = Array.from({ length: totalPaginas }, (_, indice) => indice + 1);

  function cambiarPagina(numero) {
    // Protege también la función ante valores fuera del rango, además de disabled.
    if (numero >= 1 && numero <= totalPaginas) {
      setPaginaActual(numero);
    }
  }

  return (
    <section id="catalogo" className="section-space">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DATOS DE MUESTRA</p>
            <h2>Catálogo de ejemplo</h2>
          </div>
          <p>
            Productos desde JSON.
            <br />
            Tarjetas con componentes React.
          </p>
        </div>
        {/* El resumen se actualiza con la página y se anuncia a lectores de pantalla. */}
        <p className="text-secondary small" role="status">
          {productos.length > 0
            ? `Mostrando ${inicio + 1}–${fin} de ${productos.length} productos`
            : 'No hay productos disponibles.'}
        </p>
        <div className="row g-4 catalogo" id="productos-catalogo">
          {/* map transforma cada objeto en JSX; el ID estable sirve como key. */}
          {/* Bootstrap muestra dos columnas desde md y tres desde lg. */}
          {/* Solo se renderiza el tramo de la página, no todo el archivo JSON. */}
          {productosVisibles.map((producto) => (
            <div className="col-md-6 col-lg-4" key={producto.id}>
              {/* El spread pasa las propiedades del objeto como props al componente. */}
              <Producto {...producto} />
            </div>
          ))}
        </div>
        {/* Con 6 productos o menos no hace falta mostrar controles de paginación. */}
        {totalPaginas > 1 && (
          <nav className="mt-4" aria-label="Páginas del catálogo">
            <ul className="pagination catalogo-paginacion justify-content-center flex-wrap gap-1">
              {/* disabled evita intentar retroceder desde la primera página. */}
              <li className={`page-item ${paginaVisible === 1 ? 'disabled' : ''}`}>
                <button
                  type="button"
                  className="page-link"
                  disabled={paginaVisible === 1}
                  aria-controls="productos-catalogo"
                  onClick={() => cambiarPagina(paginaVisible - 1)}
                >
                  Anterior
                </button>
              </li>
              {paginas.map((numero) => (
                <li
                  key={numero}
                  className={`page-item ${numero === paginaVisible ? 'active' : ''}`}
                >
                  {/* active da el estilo Bootstrap; aria-current comunica la selección. */}
                  <button
                    type="button"
                    className="page-link"
                    aria-label={`Página ${numero}`}
                    aria-current={numero === paginaVisible ? 'page' : undefined}
                    aria-controls="productos-catalogo"
                    onClick={() => cambiarPagina(numero)}
                  >
                    {numero}
                  </button>
                </li>
              ))}
              {/* En la última página no existe un siguiente tramo de productos. */}
              <li
                className={`page-item ${paginaVisible === totalPaginas ? 'disabled' : ''}`}
              >
                <button
                  type="button"
                  className="page-link"
                  disabled={paginaVisible === totalPaginas}
                  aria-controls="productos-catalogo"
                  onClick={() => cambiarPagina(paginaVisible + 1)}
                >
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
