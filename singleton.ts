//!## Ejercicio 1: Implementar Patrón Singleton para el Inventario
// **Objetivo**: Implementar un patrón **Singleton** para gestionar un inventario de equipos informáticos.

// - Crear una clase `Inventario` que siga el patrón Singleton.
// - Esta clase debe permitir registrar equipos con las propiedades `nombre`, `tipo` y `estado` (Ej.: "disponible", "en reparación").
// - Agregar un método `agregarEquipo` para añadir equipos y un método `listarEquipos` para devolver la lista completa de equipos registrados.

// **Ejemplo de salida esperada:**
// ```typescript
// const inventario = Inventario.obtenerInstancia();
// inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
// console.log(inventario.listarEquipos()); 
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]
// ```

type TipoEquipo = "Portátil" | "Escritorio" | "Periférico";
type EstadoEquipo = "disponible" | "no disponible";

interface Equipos {
    nombre: string,
    tipo: TipoEquipo,
    estado: EstadoEquipo,
}

class Inventario {
    private static instancia: Inventario;

    private equipos: Equipos[] = [];

    private constructor() { }

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }

    public agregarEquipo(nombre: string, tipo: TipoEquipo, estado: EstadoEquipo): void {
        const nuevoEquipo: Equipos = { nombre, tipo, estado };
        this.equipos.push(nuevoEquipo);
    }

    public listarEquipos(): Equipos[] | undefined {
        return this.equipos
    }
}

// ! Uso del Singleton
const inventario = Inventario.obtenerInstancia()
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible")
console.log(inventario.listarEquipos());
