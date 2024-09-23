//! ## Ejercicio 3: Implementar Patrón Observer para Seguimiento del Estado
// **Objetivo**: Utilizar el patrón **Observer** para notificar a un departamento de soporte cuando un equipo cambia de estado.

// - Crear una clase `Soporte` que actúe como observador y reciba notificaciones cuando el estado de un equipo cambie.
// - Implementar la clase `Equipo` que permita agregar observadores y notifique a los observadores cuando su estado cambie.

// **Ejemplo de salida esperada:**
// ```typescript
// const soporte = new Soporte();
// const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
// equipo.agregarObservador(soporte);
// equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiad
o su estado a en reparación.
// ```

interface Observador {
    actualizar(equipo: Equipo): void; // Recibe el equipo como argumento para acceder a su información
}

class Equipo {
    private observadores: Observador[] = [];

    constructor(private nombre: string, private tipo: string, private estado: string) {}

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this));
    }

    getNombre(): string {
        return this.nombre;
    }

    getEstado(): string {
        return this.estado;
    }
}

class Soporte implements Observador {
    actualizar(equipo: Equipo): void {
        console.log(`${equipo.getNombre()} ha cambiado su estado a ${equipo.getEstado()}.`);
    }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");

equipo.agregarObservador(soporte);

equipo.cambiarEstado("en reparación");
