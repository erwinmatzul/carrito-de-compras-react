### **Carrito de Compras React**

![React](https://img.shields.io/badge/React-2025-blue?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap)
![MUI](https://img.shields.io/badge/MUI-Badge-blue?logo=mui)
![Status](https://img.shields.io/badge/Status-En%20Desarrollo-yellow)


#### **Descripción General**
Este proyecto consiste en una aplicación web desarrollada con **React**, la cual implementa un **carrito de compras dinámico**, consumiendo datos desde una **API pública** y manejando el estado global mediante **Context API** y **useReducer**, siguiendo prácticas recomendadas de clean code y separación de responsabilidades.

####  **- Características Principales**

 **Listado de Productos:** se consumen desde Platzi Fake Store API con manejo de loading y errores.  
 **Carrito de Compras Dinámico:** agregar productos, incrementar/disminuir cantidades, eliminar productos.  
 **Cálculo Automático de Total:** se actualiza en tiempo real con cada acción.  
 **Navegación SPA:** utilizando React Router DOM para separar páginas.  
 **Diseño Responsive y Profesional:** adaptado a escritorio, tablet y móvil.  
 **Componentización Avanzada:** con componentes reutilizables y escalables.  
 **UI Dinámica:** uso de MUI Badge para mostrar cantidad de productos en el carrito.  
 **Código Modular y Mantenible:** Context y Providers separados, con reducers optimizados.



####  **- Tecnologías**

| Tecnología | Descripción |
|------------|-------------|
| **React** | Libreria principal, Hooks (useState, useEffect, useContext, useReducer) |
| **React Router DOM** | Navegación entre vistas |
| **Bootstrap 5** | Estilizado de tablas, navbar y layouts |
| **Material UI (MUI)** | Badge de carrito |
| **API Platzi Fake Store** | Fuente de datos para los productos |
| **CSS Modules / Global CSS** | Estilos personalizados profesionales |




####  **- Flujo de Funcionamiento**

1. **Inicio:**  
   - Se renderiza `ComprasPages`, obteniendo productos desde la API y mostrándolos en cards.
   - Cada card permite agregar el producto al carrito mediante Context.

2. **Carrito:**  
   - Navegando a `/carrito`, se muestra el resumen en tabla.
   - Cada producto incluye botones para incrementar, disminuir o eliminar cantidades.
   - El total se actualiza dinámicamente.
   - El botón **Comprar** muestra un mensaje de confirmación.

3. **Estado Global:**  
   - Se gestiona mediante **CarritoContext** y **ProductosContext**.
   - Se utiliza **useReducer** para mutaciones complejas de estado en el carrito.


####  **Posibles Futuras Mejoras**

Probablemente se retome en el futuro para añadir más funcionalidades y transformarlo en un sistema más completo
