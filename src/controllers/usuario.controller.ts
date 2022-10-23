import { Request, response, Response } from "express";
import UsersService from '../services/Usuario.service';
import { UserDto } from '../entities/dto/UserDto';

class UsuarioController {

    public async test(req: Request, res: Response) {
        const { page, limit } = req.params;
        const result = await UsersService.test();
        return res.status(200).send(result);
    }
    
    public async list(req: Request, res: Response) {
        const { page, limit } = req.params;
        let result;
        result = await UsersService.list();
        return res.status(200).send(result);
    }
    
    public async registrar(req: Request, res: Response) {
        const userDto = req.body as UserDto;
        const result = await UsersService.create(userDto);
        return res.status(200).send(result);
    }
    
    public async editar(req: Request, res: Response) {
        const userDto = req.body as UserDto;
        
        let result = await UsersService.edit(parseInt(req.params.id), userDto);
        return res.status(200).send(result);
    }
    
    public async eliminar(req: Request, res: Response) {
        const result = await UsersService.desactivar(parseInt(req.params.id));
        return res.status(200).send(result);
    }
  }

  export default new UsuarioController();