import { Linking } from "react-native";
import InAppBrowser from "react-native-inappbrowser-reborn";

export const urlOpener = async (url, redirectUrl) => {
    await InAppBrowser.isAvailable();
    const { type, url: newUrl } = await InAppBrowser.openAuth(url, redirectUrl, {

    })

    if (type === "success") {
        Linking.openURL(newUrl);
    }
}