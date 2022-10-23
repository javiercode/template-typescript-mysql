import {Column, Entity, PrimaryColumn, CreateDateColumn, ObjectIdColumn, OneToOne, JoinColumn,ManyToOne, BaseEntity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { UserDto } from './dto/UserDto';

@Entity('user')
export class User{
    
    @PrimaryGeneratedColumn({name:"ID"})
    id: number

    @Column({name:'USERNAME'})
    // @Index({ unique: true })
    username:string;

    @Column({name:'NOMBRE'})
    nombre:string;

    @Column({name:'PASSWORD'})
    password:string;

    @CreateDateColumn({ name: "FECHA_REGISTRO" })
    fechaRegistro:Date

    @Column({ name: "FECHA_MODIFICACION" })
    fechaModificacion:Date
    
    constructor(params: UserDto = {} as UserDto){
        this.nombre=params.nombre;
        this.username=params.username;
        this.password=params.password;
        
    }
}