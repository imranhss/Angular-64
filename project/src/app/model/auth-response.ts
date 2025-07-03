import { UserModule } from "./user-module";

export interface AuthResponse {

    token: string;
    user: UserModule;

}
