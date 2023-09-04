import { ReactNode, createContext, useContext, useState } from "react";
interface MyContext {
    user:boolean;
    setUser: React.Dispatch<React.SetStateAction<boolean>>;
}
export const UserLogging = createContext<MyContext | undefined>(undefined)
const UserProvider = ({children}:TodoProps) =>{
    const [user, setUser] = useState(false);

    return (
        <>
            <UserLogging.Provider value={{ user, setUser }}>
                {children}
            </UserLogging.Provider>
        </>

    );
}
export default UserProvider

export const useUserContext = () => useContext(UserLogging);
