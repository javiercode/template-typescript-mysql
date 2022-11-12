import { Request, response, Response } from "express";
import LibroRepository from '../repositories/Libro.Repository';
import { UserDto } from '../entities/dto/UserDto';
import { MessageResponse } from "../entities/dto/GeneralDto";

class UsuarioController {

    public async test(req: Request, res: Response) {
        const { page, limit } = req.params;
        return res.status(200).send("Hola mundo");
    }
    
    public async list(req: Request, res: Response) {
        const { page, limit } = req.params;
        let result: MessageResponse = { success: false, message: "Error de obtencion de datos", code: 0 };
        try {
            let query = await LibroRepository.listAll();
            result.data = query.data;
            result.success = true;
            result.message = "Obtención exitosa";
            result.total = query.count || 0;
        } catch (error) {
            if (error instanceof TypeError) {
                console.error(error);
            }
        }
        return res.status(200).send(result);
    }
    /*
    public async registrar(req: Request, res: Response) {
        const userDto = req.body as UserDto;
        //TODO: Aqui logica para registrar
        return res.status(200).send(result);
    }
    
    public async editar(req: Request, res: Response) {
        const userDto = req.body as UserDto;
        //TODO: Aqui logica para editar
        return res.status(200).send(result);
    }
    
    public async eliminar(req: Request, res: Response) {
        //TODO: Aqui logica para desactivar
        return res.status(200).send(result);
    }*/
  }

  export default new UsuarioController();