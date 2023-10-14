class Curso
{
    public id:number;
    public descripcion:string;
    public alumnos: number;

    constructor()
    {
        this.id=1;
        this.descripcion="programacion";
        this.alumnos=1;
    }
    public getid()
    {
        return this.id;
    }
    public setId(id:number)
    {
        this.id= id;
    }

    public getDescripcion()
    {
        return this.descripcion
    }
    public setDescripcion(descripcion: string)
    {
        this.descripcion = descripcion;
    }

    public setAlumnos(id:number)
    {
        this.id = id;
    }
    public getAlumnos()
    {
        return this.alumnos;
    }
}
var curso = new Curso();
console.log(curso);









