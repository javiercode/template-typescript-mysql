import {Column, Entity, PrimaryColumn, CreateDateColumn, ObjectIdColumn, OneToOne, JoinColumn,ManyToOne, BaseEntity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { LibroDto } from './dto/LibroDto';

@Entity('libros')
export class Libro{
    
    @PrimaryGeneratedColumn({name:"ID"})
    id: number

    @Column({name:'AUTOR'})
    autor:string;

    @Column({name:'TITULO'})
    titulo:string;

    @Column({name:'FORMATO'})
    formato:string;

    @Column({name:'EDITORIAL'})
    editorial:string;

    @CreateDateColumn({ name: "FECHA_REGISTRO" })
    fechaRegistro:Date

    @Column({ name: "FECHA_MODIFICACION" })
    fechaModificacion:Date
    
    constructor(params: LibroDto = {} as LibroDto){
        this.autor = params.autor;
        this.titulo = params.titulo;
        this.formato = params.formato;
        this.editorial = params.editorial;
        
    }
}