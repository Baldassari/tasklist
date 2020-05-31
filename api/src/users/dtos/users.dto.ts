export class UserDTO {
    email: string;
    password: string;
}

export class CreateUserDTO extends UserDTO {
    name: string;
}
