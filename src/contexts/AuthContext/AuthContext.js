import React, { createContext, useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        checkUserSignIn();
    }, [])

    const checkUserSignIn = async () => {
        setAuthLoading(true);

        try {
            const authenticatedUser = await Auth.currentAuthenticatedUser({bypassCache: true});
            setCurrentUser(authenticatedUser);
        } catch (e) {
            setCurrentUser(null);
        }      
        
        setAuthLoading(false);
    }

    const handleSignOut = async () => {
        await Auth.signOut();
        setCurrentUser(null);
    }

    const providerValues = {
        currentUser,
        setCurrentUser,
        authLoading,
        setAuthLoading,
        checkUserSignIn,
        handleSignOut
    }

    return(
        <AuthContext.Provider value={providerValues}>
            { children }
        </AuthContext.Provider>
    )
};