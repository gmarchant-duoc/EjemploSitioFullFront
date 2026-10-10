# FS. Duoc UC - Ejemplo Catalogo React

Proyecto educativo para estudiantes de Duoc UC, construido con React y Vite. El catálogo utiliza datos de muestra para practicar componentes, props, listas, estado, eventos y diseño responsive con Bootstrap y CSS propio.

## Desarrollo

```sh
npm install
npm run dev
```

El servidor muestra la dirección local en la terminal. Los cambios en los
componentes y estilos se actualizan automáticamente durante el desarrollo.

## Comprobaciones

```sh
npm run lint
npm run build
npm run format:check
```

`npm run format` aplica el formato definido en `.prettierrc.json`.
`npm run preview` permite revisar el resultado de producción después del build.

## Organización

- `src/App.jsx`: compone las secciones y define su orden.
- `src/components/Header.jsx`: navegación y apertura del menú móvil con React.
- `src/components/Logo.jsx`: logo compartido por Header y Footer.
- `src/components/Inicio.jsx`: presentación y acceso al catálogo.
- `src/components/Catalogo.jsx`: grilla responsive de productos.
- `src/components/Producto.jsx`: tarjeta con precio y reemplazo para imágenes ausentes o fallidas.
- `src/components/About.jsx`: propósito educativo y conceptos que demuestra el ejemplo.
- `src/components/Contacto.jsx`: formulario con validación nativa y estado del resultado.
- `src/components/Footer.jsx`: enlaces y copyright.
- `src/data/productos.json`: catálogo; cada producto contiene `id`, `nombre`, `imagen` y `precio` en pesos chilenos.
- `src/index.css`: estilos base, desplazamiento y accesibilidad.
- `src/App.css`: identidad visual, secciones y ajustes responsive.
- `src/components/Producto.css` y `Catalogo.css`: estilos específicos del catálogo.

## Diseño y navegación

Bootstrap se importa en `src/main.jsx` antes de los estilos propios. Sus clases
resuelven contenedores, columnas, botones y formularios. El CSS propio define
colores, espaciado y detalles visuales. No se usan estilos inline.

Los enlaces navegan a secciones de la misma página: `inicio`, `catalogo`,
`nosotros` y `contacto`. Mantener esos identificadores al editar los componentes.
El menú móvil se controla con React, sin depender del JavaScript de Bootstrap.

## Contacto y personalización

El formulario es una demostración: valida campos obligatorios y correo, pero
no envía ni almacena mensajes. Para habilitar el envío, integrar un backend o
servicio en `handleSubmit` y mostrar confirmación únicamente cuando el servicio
responda correctamente.

Los botones de las tarjetas llevan a contacto; no implementan compra ni detalle
de producto. Las imágenes del catálogo son externas y tienen un reemplazo cuando
fallan. La imagen de inicio utiliza el primer producto del catálogo.

Para personalizar el sitio, actualizar Logo, los textos de Inicio y About, el
título de `index.html` y los productos del JSON.

## Página Admin independiente

El menú público enlaza a `/admin.html`. Esta página tiene su propia entrada
`src/admin/main.jsx`, y no renderiza `App.jsx`. Vite incluye ambas páginas en el build.

- `src/admin/Login.jsx`: formulario de acceso sin validación de campos ni credenciales.
- `src/admin/Admin.jsx`: muestra el panel únicamente después de pulsar Entrar; permite cerrar sesión.
- `src/admin/Admin.css`: estilos exclusivos de administración.

El acceso usa estado de React en memoria para ilustrar el renderizado condicional.
No es autenticación real: cualquier persona puede entrar y la recarga vuelve al login.
El panel presenta el catálogo en una tabla de consulta, sin modificar el JSON.

## Validación de correo

El formulario público combina `type="email"` con un patrón que requiere usuario,
arroba y dominio con punto (por ejemplo, `alumno@correo.cl`). Los errores se muestran
en español mediante `setCustomValidity` y se limpian al editar el campo. Esta
validación revisa el formato; no comprueba que el correo exista.

## Paginación del catálogo

`Catalogo.jsx` muestra 6 productos por página. A partir del séptimo aparecen
Anterior, botones numerados y Siguiente. Con el JSON actual de 3 productos,
los controles permanecen ocultos. No se agregan productos ficticios al archivo.

`useState` conserva la página seleccionada. `Math.ceil` calcula el total de páginas
y `slice` obtiene el tramo visible sin modificar los datos. El resumen indica
el rango mostrado y los botones de los extremos se deshabilitan. Un catálogo vacío
muestra un mensaje sin controles. Al recargar se vuelve a la primera página.

Para practicar, agrega productos con IDs únicos al JSON y observa los casos de
6, 7 y 13 elementos. Puedes cambiar `PRODUCTOS_POR_PAGINA` para experimentar.
La paginación ocurre en el navegador; todos los datos del JSON se cargan juntos.
La tabla de Admin continúa mostrando todos los productos.
