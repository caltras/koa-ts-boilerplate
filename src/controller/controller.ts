
import { Response } from '@t2ee/vader';

export default class Controller{
    async success(entity:any){
        return new Response()
                .status(200)
                    .entity(entity)
                        .build();
    }
    async error(error:any,status?:number){
        return new Response()
                .status(status)
                    .entity(error)
                        .build();
    }
}