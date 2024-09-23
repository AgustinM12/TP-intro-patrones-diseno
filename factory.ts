//! ## Ejercicio 2: Implementar Patrón Factory Method para Crear Equipos
// **Objetivo**: Utilizar el patrón **Factory Method** para crear diferentes tipos de equipos.

// - Crear una clase `EquipoFactory` con un método `crearEquipo` que, basado en el tipo de equipo ("Notebook", "Desktop", "Servidor"), devuelva una instancia de la clase adecuada.
// - Crear clases específicas para cada tipo de equipo (`Notebook`, `Desktop`, `Servidor`), cada una con sus propias propiedades (Ej.: `ram`, `procesador`).

// **Ejemplo de salida esperada:**
// ```typescript
// const factory = new EquipoFactory();
// const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
// console.log(Notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7
// ```

