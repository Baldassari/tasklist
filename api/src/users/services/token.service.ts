import { Injectable } from "@nestjs/common";
import * as jwt from "jsonwebtoken";

@Injectable()
export class TokenService {
    verifyToken(bearerHeader: string) {
        if (bearerHeader.startsWith("Bearer")) {
            return true;
        }
    }
}
