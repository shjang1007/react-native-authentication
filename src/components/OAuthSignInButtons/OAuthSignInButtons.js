import React from "react";

// import Components
import CustomButton from "../CustomButton";

const OAuthSignInButtons = () => {
    const onSignInGooglePressed = () => {
        console.warn("Sign In Google Button Pressed");
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
                type="secondary"

            />
            <CustomButton
                text="Continue with Apple"
                onPress={onSignInApplePressed}
                icon="apple"
                type="secondary"
            />
        </>
    )
}

export default OAuthSignInButtons;