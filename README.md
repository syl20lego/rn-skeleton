# rn-skeleton
I had some trouble finding example for integrating keys frameworks all together, but never example how everything would work together. There are probably other ways feel free to leave comments or suggestions.

React native skeleton project for
* React Native
* React-Redux
* Redux-Persist
* React Navigation
* Redux-Saga

# Application 
![Overview](./documentation/ScreenShot.png)
* Inspired by Spencer Carli tutorial

# Step by step installation guide

I'll try to show all the commands you need to run to create your own project if you don't want to clone this one.

[Building Projects with Native Code](https://facebook.github.io/react-native/docs/getting-started.html)


## Shell tools
```Bash
npm install -g create-react-native-app
npm install -g react-native-cli
npm install -g react-native-git-upgrade
```

## Init

```Bash
react-native init RNskeleton
git init
git add .
git commit -m "initial"
npm install
```

## Dependencies

### React Component
```Bash
npm install --save prop-types
```

### Redux,Persist,Saga
```Bash
npm install --save react-redux redux redux-logger
npm install --save redux-persist
npm install --save redux-saga
```

### Navigation
```Bash
npm install --save react-navigation
```

### Icons and Native Elements
```Bash
npm install --save react-native-elements
npm install --save react-native-vector-icons
react-native link
```

### Fonts
```Bash
react-native link
```
### Testing


```Bash
npm install --save-dev jest babel-jest babel-preset-es2015 babel-preset-react react-test-renderer
npm install --save-dev jest-cli
npm install --save-dev nock
npm install --save-dev enzyme
npm install --save-dev enzyme-adapter-react-16
npm install --save-dev react-dom
```

### Running Jest
```Bash
npm install -g jest
```

```Bash
jest --watch
```

## Runing Simulators
### iOS
```
react-native run-ios
```
### Android
```
react-native run-android
```
Show RN options
```
adb shell input keyevent 82
```
Reload RN
```
adb shell input text "RR"
```

# Architecture

From the application creation there are few choice to be made, I'll try to explains my decisions or sometime just use the defacto.

## Expo or Native Code
Right from the start you have to make one big decision, should I use Expo or go Native Code. The key to architecture is sometime delay the decision until it is important. Commiting to Expo right now seems to be a big steps and I want to decide which components to include along the way. I also want to be able to use my own native component, I could always eject with Expo but would be left with a big dependencies. Since this is a learning journey, I decided to go the native code way.



# Tutorial

React Native doesn't allow you to have anything other then alphanum chararcters in your project name, I name my repo rn-skeleton so I opt for RNskeleton and change the directory name when creating the project [Init](##Init).

Finaly this is the first version of react native 0.50 that doesn't generate the index.android.js and index.ios.js. We can start editing the App.js directly. I want my files to be under /src rather then /app since there is alreay an app.json and an App.js.


...

# References

[Expo demonstrating how to build my app Capo Keys from scratch to deployment](https://www.youtube.com/playlist?list=PL06z42zB6YZ-9CQDX015uaeqMcSErKbes)
* Thanks to Barry Michael Doyle for this excellent tutorial about developing an application from begining to the end using Expo and Redus. Very good explanations and enjoyable to watch

[Simple React Native application with Redux](https://www.youtube.com/watch?v=3msLwu25SQY&list=PLk083BmAphjtGWyZUuo1BiCS_ZAgps6j5)
* Thanks to Jon Lebensold that provided me with the basic skeleton for redux. `createReducer.js` is interesting to simplify the reducer switch case. I haven't use it yet since it makes the reducers pattern looking different.

[FlatList and random user api](https://www.youtube.com/watch?v=r-ENJLGrd3s)
* Thanks to Spencer Carli to giving the UX idea and api as well as the good explanation how to setup FlatList

[What is the right way to do asynchronous operations in Redux?](https://decembersoft.com/posts/what-is-the-right-way-to-do-asynchronous-operations-in-redux/)
* Provides good overview of different solutions for asynchronous framework working with redux. In the end, I select redux-sagas since I like keeping my actions being plain object and reducers simple and only handling states

# Environment

macOS Sierra
Version 10.12.6

npm --version
5.5.1

node --version
v6.11.3

react-native --version
react-native-cli: 2.0.1
react-native: 0.50.4
