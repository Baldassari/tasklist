import {
    Controller,
    Get,
    Post,
    Body,
    BadRequestException,
} from "@nestjs/common";
import { UsersService } from "../service/users.service";
import { CreateUserDTO } from "../dto";
import { BaseResponse, validateEmailFormat } from "../../utils";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getHello(): string {
        return this.usersService.getHello();
    }

    @Post()
    async createUser(@Body() newUser: CreateUserDTO): Promise<BaseResponse> {
        // Todo: Hash pasword
        if (!validateEmailFormat(newUser.email)) {
            return new BaseResponse(
                null,
                "Email does not seems to be in the correct format.",
            );
        }

        return this.usersService
            .create(newUser)
            .then(user => {
                return new BaseResponse(user);
            })
            .catch((error: Error) => {
                console.error(error);
                throw new BadRequestException(
                    new BaseResponse(null, error.message),
                );
            });
    }
}
