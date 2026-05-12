import { createContext, useContext, useState, } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    const [showAuth, setShowAuth] = useState(false);

    const login = (data) => {
        localStorage.setItem(
            "token",
            data.token
        );
        localStorage.setItem(
            "user",
            JSON.stringify(data.user)
        );
        setUser(data.user);
        setShowAuth(false);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };

    const openAuth = () => {
        setShowAuth(true);
    };

    const closeAuth = () => {
        setShowAuth(false);
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                showAuth,
                openAuth,
                closeAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () =>
    useContext(AuthContext);