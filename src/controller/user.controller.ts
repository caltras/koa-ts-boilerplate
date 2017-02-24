import {Consume, MediaType, Path, POST, QueryParam, PathParam, BodyParam,Produce,GET} from '@t2ee/vader';
import Controller from './controller';

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
    async index2(){
        return this.success('sucess '+this.userId);
    }

    @GET
    @Path("/error")
    async error(){
        return super.error({message:"Error"},500);
    }
}