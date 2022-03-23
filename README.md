# React Native Authentication
Project using React Native and AWS Amplify to implement authentication including oAuth and its workflow

## Installation
Will require React Native CLI to run the project.
To set up the React Native CLI development environment, please see [here](https://reactnative.dev/docs/environment-setup).

Once the environment is set up, navigate to the project directory, and run:
```bash
npm install
```

## To Run the Project:
You will need two terminals, one to start the React Native server, and one to run ios simulator

On one terminal, run:
```bash
npm start
```

On the other terminal, to run the ios simulator, run:
```bash
npm run ios
```

To run the Android simulator, run:
```bash
npm run android
```

## Limitations of Amplify
- When users sign out, instead of just signing out, it re-directs to browser url
- Once users sign in via social sign in method, the users do not have options to be able to sign in using different accounts.

## Roadmap
- Test that the app looks good across different devices
- Implement oAuth for Apple sign in

## Deprecation Warning
- EventEmitter.removeListner deprecated and subscription.remove() should be used, but React Native not updated to remove the warnings. Patch-Package may be the solution to change node_modules affected by this deprecation message, but leaving things as-is for now as it still works.