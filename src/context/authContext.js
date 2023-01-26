import { createContext, useContext, useEffect, useState } from "react";
import * as authService from '../api/authApi';
import * as userService from '../api/userApi';
import { addAccessToken, getAccessToken, removeAccessToken } from '../utils/localStorage';
import Spinner from '../component/Ui/Spinner'

const AuthContext = createContext();

function AuthContextProvider({ children }){

    const [user , setUser ] = useState(null);

    const [initialLoading , setInitialLoading ] = useState(true);
    
    
    const getMe = async () => {
        const res = await authService.getMe();
        setUser(res.data.user);
      };
    
    
    useEffect(()=>{

        const fetchMe = async () => {
            try{
                if(getAccessToken()){
                    await getMe();
                }
            }catch(err){
                console.log(err);
            }finally{
                setInitialLoading(false)
        }};

    
        fetchMe();
        
},[]);

    const register = async input => {
            const res = await authService.register(input);
            addAccessToken(res.data.token);
            setTimeout( () => getMe() , 1 )
    }

    const login = async input => {
        const res = await authService.login(input)
        // setUser(true);
        addAccessToken(res.data.token)
        await getMe();
    }

    const logout = () => {
        setUser(null);
        removeAccessToken();
    }

    const updateUser = async (input) => {
        const res = await userService.updateUser(input);
        setUser(res.data.user);
    }

    if(initialLoading === true){
        return <Spinner/>
    }

    return (
    <AuthContext.Provider value={{ user ,register, login , logout ,updateUser }} >{children}</AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContextProvider;