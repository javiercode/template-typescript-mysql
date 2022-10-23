import {MessageResponse} from '../../entities/dto/GeneralDto';

export interface IUsuario {
    test: () => Promise<any>;
    list: ()=> Promise<MessageResponse>;
    edit: (id: number, userDto: any) => Promise<MessageResponse>;
    create: (userDto: any) => Promise<MessageResponse>;
    desactivar: (id:number) => Promise<MessageResponse>;
}