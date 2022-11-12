import express, { application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import UserController from './controllers/usuario.controller';
import LibroController from './controllers/libro.controller';

const app = express();

app.use(cors({
    exposedHeaders: ['Authorization']
}));

app.use(morgan('dev'));
app.use(express.json());
app.use((err:any, req:any, res:any, next:any) => {
	if (err) {
	  console.error('Invalid Request data')
	  res.send('Petición de request invalido')
	} else {
	  next();
	}
});

app.get('/api/usuario/test',UserController.test);
app.get('/api/usuario/list',UserController.list);
app.post('/api/usuario/create',UserController.registrar);
app.put('/api/usuario/edit/:id',UserController.editar);
app.delete('/api/usuario/delete/:id',UserController.eliminar);

app.get('/api/libro/list',LibroController.list);

export default app;