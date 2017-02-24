import { Router } from '@t2ee/vader';

import UserController from './user.controller';

export default class ControllerProvider {
    static init(){
        const router = new Router();
        router.use(UserController);
        return router.routes();
    }
}