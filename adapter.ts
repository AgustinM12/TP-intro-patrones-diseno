//! ## Ejercicio 4: Adaptador para Cambiar la Interfaz de Inventarios Viejos
// **Objetivo**: Implementar el patrón **Adaptador** para integrar una clase antigua de inventario con el nuevo sistema.

// - Crear una clase `InventarioViejo` que tenga un método `agregarItem`.
// - Implementar una clase `AdaptadorInventario` que permita utilizar `InventarioViejo` con la nueva interfaz `Inventario`.

// **Ejemplo de salida esperada:**
// ```typescript
// const inventarioViejo = new InventarioViejo();
// const adaptador = new AdaptadorInventario(inventarioViejo);
// adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
// console.log(adaptador.listarEquipos());
// // [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]
// ```