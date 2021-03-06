import { Request, Response} from 'express';
import { CreateDesenvUseCase } from './CreateDesenvUseCase';


class CreateDesenvController {
    async create(request: Request, response: Response): Promise<Response> {
        const {nome, nivel_id,  sexo,data_nascimento, idade, hobby} = request.body;

        const creatDesenv = new CreateDesenvUseCase();

        const desenv = await creatDesenv.execute({
            nome, 
            nivel_id,
            sexo, 
            data_nascimento, 
            idade, 
            hobby
        });

        return response.json(desenv);
    }
}

export { CreateDesenvController }