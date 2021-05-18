import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";

export class DbConfig {
    config: TypeOrmModuleOptions = {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'nestjs_teaching',
        entities: [User],
        synchronize: true,
    }

    static getConfig(): TypeOrmModuleOptions {
        let conf = new DbConfig();
        return conf.config;
    }

}