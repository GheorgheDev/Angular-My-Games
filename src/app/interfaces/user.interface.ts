import { Game } from "./game.interface";

export interface User {
    "id": number;
    "name": string;
    "email": string;
    "games": Game[];
}