# LUXE. - Catálogo de Tienda Virtual

## 📝 Descripción del Proyecto
Este proyecto consiste en el desarrollo de una aplicación web para una tienda de comercio electrónico llamada **LUXE.** El objetivo principal es consumir datos reales de una API externa (FakeStoreAPI) y presentarlos en una interfaz moderna, limpia y completamente responsiva. 

La aplicación fue construida utilizando **React** junto con **Vite** para un entorno de desarrollo rápido, y estilizada con **Tailwind CSS**.

---

## ✨ Características Principales
El proyecto cumple con los requerimientos solicitados en la rúbrica y añade funcionalidades adicionales para mejorar la experiencia de usuario:

1. **Consumo de API Externa:** Conexión con tres endpoints de `fakestoreapi.com` para listar productos generales, filtrar por categorías y obtener el detalle individual de cada ítem.
2. **Custom Hook de Carga:** Creación de un hook personalizado llamado `useFetchProducts` para centralizar las peticiones con **Axios**, controlando los estados de carga (loading) y posibles errores de conexión.
3. **Navegación Dinámica:** Uso de `react-router-dom` para gestionar las rutas de la aplicación sin recargar el navegador (Single Page Application).
4. **Buscador en Tiempo Real:** Filtro de productos instantáneo desde la barra de navegación que actualiza la URL y muestra un mensaje amigable en caso de no encontrar coincidencias.
5. **Navegación por Categorías:** Enlaces directos en el menú superior para segmentar el catálogo de forma inmediata.
6. **Banner Principal (Hero Banner):** Incorporación de una sección destacada en la página de inicio que mejora la estética visual de la tienda.
7. **Estado Global del Carrito (Bonus):** Implementación de un carrito de compras mediante `Context API`. Permite agregar productos directamente desde la tarjeta y controlar las cantidades (+ / -) dentro de la página del carrito, recalculando el precio total de forma automática.
8. **Lista de Favoritos:** Sistema interactivo con un botón de corazón para guardar productos de interés en una sección dedicada.
9. **Persistencia Local:** Uso de `localStorage` para evitar que los productos del carrito o de la lista de favoritos se borren si el usuario refresca la página.

---

## 🛠️ Tecnologías Utilizadas
- **React** (Biblioteca principal)
- **Vite** (Herramienta de construcción y empaquetado)
- **Tailwind CSS** (Framework para estilos rápidos y responsivos)
- **React Router DOM** (Gestión de rutas y parámetros en la URL)
- **Axios** (Peticiones HTTP a la API)

---

## 📁 Estructura del Proyecto
El código se encuentra organizado de la siguiente manera dentro de la carpeta `src`:
- `/components`: Componentes visuales y reutilizables de la app (`Header`, `Footer`, `ProductCard`, `Cart`, etc.).
- `/context`: Proveedores de estado global para la lógica del Carrito y de Favoritos.
- `/hooks`: Lógica separada para el consumo de la API (`useFetchProducts`).
- `/pages`: Vistas principales de la aplicación (`Home`, `ProductPage`, `FavoritesPage`, `NotFound`).

