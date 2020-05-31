import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModel } from "./models/user.model";
import { UsersService } from "./services/user.service";
import { UsersController } from "./controllers/user.controller";

@Module({
    imports: [MongooseModule.forFeature([UserModel])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
