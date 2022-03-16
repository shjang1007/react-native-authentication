import React from "react";
import { Auth } from "aws-amplify";

// import Components
import CustomButton from "../CustomButton";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

const OAuthSignInButtons = () => {
    const onSignInGooglePressed = () => {
        Auth.federatedSignIn({
            provider: "Google"
        })
    }

    const onSignInApplePressed = () => {
        console.warn("Sign In Apple Button Pressed");
    }

    return(
        <>
            <CustomButton
                text="Sign In with Google"
                onPress={onSignInGooglePressed}
                icon="google"
                type="oAuth"

            />
            <CustomButton
                text="Continue with Apple"
                onPress={onSignInApplePressed}
                icon="apple"
                type="oAuth"
            />
        </>
    )
}

export default OAuthSignInButtons;