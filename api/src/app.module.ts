import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { UsersModule } from "./users/users.module";
import { ProjectsModule } from './projects/projects.module';

@Module({
    imports: [
        UsersModule,
        MongooseModule.forRoot("mongodb://localhost/tasklist"),
        ProjectsModule,
    ],
})
export class AppModule {}
