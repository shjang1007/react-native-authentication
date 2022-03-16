import React, { createContext, useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const listener = ({payload: {event, data}}) => {
            switch (event) {
                case "cognitoHostedUI":
                case "signOut":
                    checkUserSignIn();

                    break;
                case "signIn_failure":
                case "cognitoHostedUI_failure":
                    console.log("Sign in failed", data);
                    break;
            }
        }

        Hub.listen("auth", listener);

        checkUserSignIn();
        
        // useEffect expects functions to be returned to be executed on cleanup
        return () => Hub.remove("auth", listener);
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