### **Carrito de Compras React**

![React](https://img.shields.io/badge/React-2025-blue?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap)
![MUI](https://img.shields.io/badge/MUI-Badge-blue?logo=mui)
![Status](https://img.shields.io/badge/Estado-Completo-success)


#### **Descripción General**
Este proyecto consiste en una aplicación web desarrollada con **React**, la cual implementa un **carrito de compras dinámico**, consumiendo datos desde una **API pública** y manejando el estado global mediante **Context API** y **useReducer**, siguiendo prácticas recomendadas de clean code y separación de responsabilidades.

#### Funcionalidades Principales

- **Listado de productos dinámico** desde Platzi Fake Store API.
- **Buscador en tiempo real** con input controlado y lógica optimizada por hook.
-  **Carrito de compras interactivo**:
  - Agregar productos.
  - Incrementar/disminuir cantidad.
  - Eliminar productos.
  - Ver total actualizado en tiempo real.
- **Sistema de favoritos** con persistencia en el estado global.
- **Diseño responsive profesional** inspirado en Kemik.
- **Navegación SPA** con React Router DOM.
- **Estado global organizado** con múltiples Providers (productos, carrito y favoritos).
- **Componentes reutilizables y escalables**.
- **UI dinámica** con MUI Badge para notificaciones visuales.

---

###  Tecnologías Usadas

| Tecnología | Rol |
|------------|------|
| **React** | Librería principal (Hooks: `useState`, `useEffect`, `useContext`, `useReducer`) |
| **React Router DOM** | Rutas entre páginas (`<Routes>`, `<Navigate>`) |
| **Bootstrap 5** | Layout, tablas, botones, Navbar |
| **Material UI (MUI)** | Badge para notificación de carrito |
| **CSS Modules / Global CSS** | Estilos personalizados de alto nivel |
| **Platzi Fake Store API** | Fuente de productos de prueba |


###  Flujo de Funcionamiento

#### Página de Productos
- Se renderiza `ComprasPages`.
- Se obtienen productos desde la API.
- Implementación de **búsqueda con input controlado**.
- Se muestran los productos en cards con botón de **Agregar al carrito** y **Agregar a favoritos**.

####  Carrito
- Se navega a `/carrito`.
- Tabla detallada de productos con cantidades, subtotales y total.
- Botones para aumentar/disminuir/eliminar productos.
- Acción de "comprar" simula una confirmación de compra.

####  Favoritos
- Se accede desde `/favoritos`.
- Muestra todos los productos agregados como favoritos.
- Se pueden eliminar individualmente del listado.

#### Estado Global
- Gestionado con Contexts (`CarritoContext`, `ProductosContext`, `FavoritosContext`).
- Reducers separados para mantener lógica limpia.

#### Rutas Disponibles

| Ruta | Función |
|------|---------|
| `/` | Página principal de productos |
| `/carrito` | Vista del carrito de compras |
| `/favoritos` | Vista de productos favoritos |
| `/*` | Redirección automática a `/` |


