import { Children, createContext, useEffect, useState} from "react";
import { UserProfile } from "../Models/User"
import { useNavigate } from 'react-router-dom';
import { loginAPi, registerAPi } from "../Services/AuthServices";
import { toast } from "react-toastify";


type UserContextType = {
    user: UserProfile | null;
    token :string | null;
    registerUser: (email: string, username: string, password: string) => void;
    loginUser: (username :string, password: string) => void;
    logout:() => void;
    isLoggedIn:() => boolean;
};

type Props = {Children : React.ReactNode};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({Children}: Props) => {
    const navigate = useNavigate();
    const [token,setToken]  = useState<string | null>(null);
    const [user,setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token")
        if(user && token){
            setUser(JSON.parse(user));
            setToken(token);
        }
        setIsReady(true);
    },[])

    const registerUser = async(email: string, username: string, password: string) => {
        await registerAPi(email,username,password).then((res) =>{
            if(res){
                localStorage.setItem("token",res?.data.token);
                const userObj = {
                    userName: res?.data.userName,
                    email: res?.data.email,
                };
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res?.data.token!);
                setUser(userObj!);
                toast.success("Login Success!")
                navigate("/search")
            }
        }).catch((e) => toast.warning("server error occured"));
    };


    const loginUser = async(email: string, username: string, password: string) => {
        await loginAPi(username,password).then((res) =>{
            if(res){
                localStorage.setItem("token",res?.data.token);
                const userObj = {
                    userName: res?.data.userName,
                    email: res?.data.email,
                };
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res?.data.token!);
                setUser(userObj!);
                toast.success("Login Success!")
                navigate("/search")
            }
        }).catch((e) => toast.warning("server error occured"));
    };

    const isLoggedIn = () => {
        return !!user;

    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        navigate("/")
    }

    /*return
    {
        <UserContext.Provider value={{loginUser ,user,token,logout,isLoggedIn,registerUser}}>

            {isReady ? Children: null}
        </UserContext.Provider>
    };*/
}