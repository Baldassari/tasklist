import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./model/user.model";
import { UsersService } from "./service/users.service";
import { UsersController } from "./controller/users.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: "User", schema: UserSchema }]),
    ],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
