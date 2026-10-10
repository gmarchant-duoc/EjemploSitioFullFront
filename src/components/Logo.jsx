/** Identidad visual compartida por el encabezado y el pie de página. */
export default function Logo() {
  // Componente de presentación sin estado: comparte el mismo JSX entre varias páginas.
  return (
    <span className="brand">
      <span className="brand-mark" aria-hidden="true">
        FS.
      </span>
      <span className="project-name">Duoc UC - Ejemplo Catalogo React</span>
    </span>
  );
}
