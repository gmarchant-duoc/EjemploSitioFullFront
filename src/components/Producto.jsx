/** Muestra una alternativa visual si falta la imagen o su carga falla. */
import { useState } from 'react';
import './Producto.css';
// La desestructuración extrae las props enviadas desde Catalogo.
// Las props son datos de entrada: este componente no las modifica.
export default function Producto({ nombre, imagen, precio }) {
  // Cada tarjeta conserva su propio estado de error de imagen, independiente de las demás.
  const [failed, setFailed] = useState(false);
  return (
    <article className="card producto-card">
      <div className="producto-imagen-contenedor">
        {/* ?. evita fallar si imagen no existe; trim descarta cadenas vacías o espacios. */}
        {/* El ternario elige entre la imagen y su reemplazo según datos y estado. */}
        {imagen?.trim() && !failed ? (
          <img
            src={imagen}
            alt={nombre}
            className="producto-imagen"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="producto-placeholder">
            <span aria-hidden="true">FS.</span>
            <small>Imagen no disponible</small>
          </div>
        )}
      </div>
      <div className="card-body">
        <p className="product-category">PRODUCTO DE EJEMPLO</p>
        <div className="d-flex justify-content-between gap-3 align-items-center">
          <h3 className="card-title h5 mb-0">{nombre}</h3>
          <p className="producto-precio mb-0">
            {/* Las llaves insertan expresiones JS; es-CL aplica el formato numérico local. */}
            ${Number(precio).toLocaleString('es-CL')}
          </p>
        </div>
        <a href="#contacto" className="producto-boton">
          Ir al formulario <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
