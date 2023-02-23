import axios from "axios";
import stringConnection from "../../../config/stringConnection";

export const api = axios.create({
    baseURL:`${stringConnection.baseURL}`
});
export const apiGit = axios.create({
    baseURL:"https://api.github.com/users/Talles-Souza"
});
