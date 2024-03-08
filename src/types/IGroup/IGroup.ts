import {IUser} from "../IUser/IUser.ts";

export interface IGroup {
    id: number,
    name: string,
    closed: boolean,
    avatar_color?: string,
    members_count: number,
    friends?: IUser[]
}