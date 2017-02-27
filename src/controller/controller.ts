
import { Response } from '@t2ee/vader';
import * as views from 'co-views';
import config from '../config';

export default class Controller{
    private r;
    constructor(){
        this.r = views(config.template.folder, {  
            map: {
                html: config.template.engine
            }
        });
    }
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
    async render(view:string,params?:any){
        return new Response()
                .status(200)
                .entity(await this.r(view,params))
                .build();
    }
}