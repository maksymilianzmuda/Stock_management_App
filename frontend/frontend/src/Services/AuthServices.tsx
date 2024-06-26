
import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";
const api = "http://localhost:5167/api"

export const loginAPi = async (username:string,password:string ) => {
    try
    {
        const data = await axios.post<UserProfileToken>(api + "account/login",{
            username: username,
            password : password,
        });
        return data;
    }
    catch(error)
    {
        handleError(error)

    };
    
}

export const registerAPi = async (email:string ,username:string,password:string ) => {
    try
    {
        const data = await axios.post<UserProfileToken>(api + "account/register",{
            username: username,
            password : password,
            email: email
        });
        return data;
    }
    catch(error)
    {
        handleError(error)

    };
    
}