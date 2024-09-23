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

interface Producto {
    tipo: string;
    nombre: string;
    detalles(): void;
}

type tipoEquipo = "Notebook" | "Desktop" | "Servidor";

type optionalString = string | undefined;

class Notebook implements Producto {
    public tipo: tipoEquipo;
    public nombre: string;
    private ram: optionalString;
    private procesador: optionalString;
    private duracionBateria: optionalString;

    constructor(tipo: tipoEquipo, nombre: string, ram: optionalString, procesador: optionalString, duracionBateria: optionalString) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
        this.duracionBateria = duracionBateria;
    }

    public detalles(): void {
        return console.log(`Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador},Duracion de la bateria: ${this.duracionBateria}`);
    }
}

class Desktop implements Producto {
    public tipo: tipoEquipo;
    public nombre: string;
    private ram: optionalString;
    private procesador: optionalString;

    constructor(tipo: tipoEquipo, nombre: string, ram: optionalString, procesador: optionalString) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    public detalles(): void {
        return console.log(`Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`);
    }
}

class Servidor implements Producto {
    public tipo: tipoEquipo;
    public nombre: string;
    private capacidad: optionalString; 
    private puerto: optionalString; 

    constructor(tipo: tipoEquipo, nombre: string, capacidad: optionalString, puerto: optionalString) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.puerto = puerto;
    }

    public detalles(): void {
        return console.log(`Tipo: ${this.tipo}, Nombre: ${this.nombre}, Capacidad: ${this.capacidad}, Puerto: ${this.puerto}`);
    }
}

class EquipoFactory {
    public crearProducto(tipo: tipoEquipo, nombre: string, ram?: string, procesador?: string, duracionBateria?: string, capacidad?: string, puerto?: string): Producto {
        switch (tipo) {
            case "Notebook":
                return new Notebook(tipo, nombre, ram, procesador, duracionBateria);
            case "Desktop":
                return new Desktop(tipo, nombre, ram, procesador);
            case "Servidor":
                return new Servidor(tipo, nombre, capacidad, puerto);
            default:
                throw new Error('Tipo de producto no reconocido');
        }
    }
}

//!  Uso del Factory 
const factory = new EquipoFactory();
const notebook = factory.crearProducto("Notebook", "HP", "16GB", "i7", "5 horas");
const desktop = factory.crearProducto("Desktop", "Dell", "32GB", "i5");
const servidor = factory.crearProducto("Servidor", "Servidor Principal", "", "", "", "1000", "8080"); 

notebook.detalles()
desktop.detalles()
servidor.detalles()
