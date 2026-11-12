import { useEffect, useState } from 'react';

// Hook personalizado: comparte la lógica de carga del catálogo entre el sitio y el panel.
// Devuelve los productos y el estado de carga o error para que cada vista decida qué mostrar.
export default function useProductos() {
  const [catalogo, setCatalogo] = useState({
    productos: [],
    cargando: true,
    error: false,
  });

  useEffect(() => {
    const controlador = new AbortController();

    async function cargarProductos() {
      try {
        // Vite reenvía /api al backend definido en server.proxy de vite.config.js.
        const respuesta = await fetch('/api/productos', { signal: controlador.signal });
        if (!respuesta.ok) {
          throw new Error(`HTTP ${respuesta.status}`);
        }

        const productos = await respuesta.json();
        setCatalogo({ productos, cargando: false, error: false });
      } catch {
        if (!controlador.signal.aborted) {
          setCatalogo({ productos: [], cargando: false, error: true });
        }
      }
    }

    cargarProductos();
    // Cancela la petición si se desmonta la vista antes de recibir la respuesta.
    return () => controlador.abort();
  }, []);

  return catalogo;
}
