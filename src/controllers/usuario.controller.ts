import { Request, response, Response } from "express";
import UserRepository from '../repositories/User.Repository';
import { UserDto } from '../entities/dto/UserDto';
import { MessageResponse } from "../entities/dto/GeneralDto";
import { User } from "../entities/User";

class UsuarioController {

    public async test(req: Request, res: Response) {
        const { page, limit } = req.params;
        return res.status(200).send("Hola mundo");
    }
    
    public async list(req: Request, res: Response) {
        const { page, limit } = req.params;
        let result:MessageResponse = { success: false, message: "Error de obtencion de datos", code: 0 };
        try {
            let query = await UserRepository.listAll();
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
    
    public async registrar(req: Request, res: Response) {
        const userDto = req.body as UserDto;

        const result: MessageResponse = { success: false, message: "Error de registro", code: 0 };
        try {
            const usuario = new User(userDto);
            result.success = true;
            result.message = "Rol registrado";
            const oUsuario = await UserRepository.registrar(usuario);
            result.data = oUsuario;

        } catch (error) {
            if (error instanceof TypeError) {
                console.error(error);
            }
        }
        return res.status(200).send(result);
    }
    
    public async editar(req: Request, res: Response) {
        const userDto = req.body as UserDto;
        const id = parseInt(req.params.id);
        
        let result: MessageResponse = { success: false, message: "Error de registro", code: 0 };
        try {
            const user = new User(userDto);
            const userFind = await UserRepository.findById(id);
            if (userFind ) {
                result.success = true;
                result.message = "usuario actualizado!";
                user.fechaModificacion = new Date();
                await UserRepository.actualizar(id, user);
                result.data = userDto;
            } else {
                result.message = "Usuario no encontrado";
            }
        } catch (error) {
            if (error instanceof TypeError) {
                console.error(error);
            }
        }
        return res.status(200).send(result);
    }
    
    public async eliminar(req: Request, res: Response) {
        let result: MessageResponse = { success: false, message: "Error de eliminacion", code: 0 };

        try {
            const userDtoFind = await UserRepository.findById(parseInt(req.params.id));
            if (userDtoFind) {
                result.success = true;
                result.message = "Usuario eliminado";
                await UserRepository.desactivar(parseInt(req.params.id));

            } else {
                result.message = "Usuario no encontrado!";
            }
        } catch (error) {
            if (error instanceof TypeError) {
                console.error(error);
            }
        }
        return res.status(200).send(result);
    }
  }

  export default new UsuarioController();