export class Contact{
    nombre = '';
    apellido = '';
    email = '' ;
    linked = false;

    constructor(nombre, apellido, email, linked ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.linked = linked;
    }
}