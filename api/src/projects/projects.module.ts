import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModel } from './models/project.model';
import { ProjectService } from './services/project.service';
import { UsersModule } from 'src/users/users.module';
import { UserMiddleware } from './middleware/user.middleware';
import { ProjectController } from './controllers/project.controller';
import { UsersService } from 'src/users/services/user.service';
import { UserModel } from 'src/users/models/user.model';

@Module({
    imports: [
        MongooseModule.forFeature([ProjectModel]), 
        UsersModule
    ],
    providers: [ProjectService],
    controllers: [ProjectController]
})
export class ProjectsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(UserMiddleware);
    }
}
