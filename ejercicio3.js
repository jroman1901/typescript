var Curso = /** @class */ (function () {
    function Curso() {
        this.id = 1;
        this.descripcion = "programacion";
        this.alumnos = 1;
    }
    Curso.prototype.getid = function () {
        return this.id;
    };
    Curso.prototype.setId = function (id) {
        this.id = id;
    };
    Curso.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Curso.prototype.setDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    };
    Curso.prototype.setAlumnos = function (id) {
        this.id = id;
    };
    Curso.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    return Curso;
}());
var curso = new Curso();
console.log(curso);
