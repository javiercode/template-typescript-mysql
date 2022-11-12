import { DeleteResult, EntityRepository, Repository, UpdateResult } from "typeorm";
import { LibroDto } from "../entities/dto/LibroDto"
import {MysqlDataSource} from "../configs/db";
import { ListPaginate } from "../entities/dto/GeneralDto";
import { Libro } from "../entities/Libros";


class LibroRepository{
    private repository = MysqlDataSource.getRepository(Libro);

    public async findByDto (params: LibroDto): Promise<Libro[]>{
        let options={}
        options={...params}
        const [result,total] = await this.repository.findAndCount(options);
        
        return result;
    };
    
    public async findById (params: number): Promise<Libro | null>{
        const result = await this.repository.findOne(
            { where:
                    { id: params}
            }
        );
        return result
    };
     
    public async desactivar (userId: number){
        const firstUser = await this.repository.delete(userId);
        return firstUser;
    };
     
    public async actualizar (id:number, param: Libro){
        let options={}
        options={id}
        const firstUser = await this.repository.update(options,param);
        return firstUser;
    };
     
    public async registrar ( param: LibroDto){
        const firstUser = await this.repository.save(param);
        return firstUser;
    };
     
     
    public async existeUsuario (params: LibroDto): Promise<Libro|null>{    
        let options={}
        options={
            where:{user:params}}
        const result = await this.repository.findOne(options);
        return result
    };
    
    public async listAll (): Promise<ListPaginate>{
        const [result,total] = await this.repository.findAndCount();
        
        return {
            data: result,
            count: total
        }
    };
}

export default new LibroRepository();