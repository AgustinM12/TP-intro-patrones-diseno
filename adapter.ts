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
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]
// ```

interface Inventario {
    newAgregarEquipo(nombre: string, tipo: string, estado: boolean): void;

    listarEquipos(): any[];
}

class InventarioViejo {
    private items: any[] = [];

    public agregarItem(item: { nombre: string, tipo: string, estado: string }): void {
        this.items.push(item)
    }

    public listarItems(): any[] {
        return this.items;
    }
}

class AdaptadorInventario implements Inventario {

    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    newAgregarEquipo(nombre: string, tipo: string, estado: boolean): void {

        
        const item = { nombre, tipo, estado: estado ? "Disponible" : "No disponible" };

        this.inventarioViejo.agregarItem(item); // ! Usar el método del sistema viejo
    }

    //! Listar los equipos usando el método del sistema viejo
    listarEquipos(): any[] {
        return this.inventarioViejo.listarItems();
    }
}

// * Uso del patrón Adaptador
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.newAgregarEquipo("Servidor Dell", "Servidor", false);
console.log(adaptador.listarEquipos());

