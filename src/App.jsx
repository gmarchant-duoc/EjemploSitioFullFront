/** Compone las secciones del sitio; los enlaces del menú usan sus identificadores. */
import Header from './components/Header';
import Inicio from './components/Inicio';
import Catalogo from './components/Catalogo';
import About from './components/About';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import useProductos from './hooks/useProductos';
import './App.css';
// Los nombres con mayúscula en JSX representan componentes importados.
// App compone la página pública; Admin tiene su propia entrada y no se monta aquí.
export default function App() {
  // Inicio y Catálogo comparten el resultado de una misma consulta.
  const catalogo = useProductos();

  return (
    <>
      {/* El fragmento agrupa elementos sin añadir un contenedor al HTML. */}
      <Header />
      {/* El orden de estos componentes determina el orden de las secciones. */}
      <main id="contenido">
        <Inicio {...catalogo} />
        <Catalogo {...catalogo} />
        <About />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
