import {Consume, MediaType, Path, POST, QueryParam, PathParam, BodyParam,Produce,GET,VaderContext} from '@t2ee/vader';
import Controller from './controller';
import * as Koa from 'koa';

@Path('/user')
export default class UserRoute extends Controller{
    private user:any;
    @PathParam('id') userId:string;

    constructor() {
        super();
        this.user = [];
    }
    @GET
    @Path("/")
    async index(){
        return this.success('sucess');
    }
    @GET
    @Path("/:id")
    async index2(koaContext:VaderContext){
        console.log(this);
        return this.success('sucess '+this.userId+" ok");
    }

    @GET
    @Path("/error")
    async error(){
        return super.error({message:"Error"},500);
    }
    @GET
    @Path("/template")
    async renderTemplate(){
        return this.render("user/index",{user: {nome:"Claudio Traspadini Oliveira" }});
    }
}