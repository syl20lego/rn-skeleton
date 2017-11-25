# rn-skeleton
I had some trouble finding example for integrating keys frameworks all together, it is easy to find on a specific topic but never how everything would work together. There are probably other ways to do this but feel free to leave comments or suggestions.

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


## Command line tools
```Bash
npm install -g create-react-native-app
npm install -g react-native-cli
npm install -g react-native-git-upgrade
```

## Init

Create your own project.

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
## Testing


```Bash
npm install --save-dev jest babel-jest babel-preset-es2015 babel-preset-react react-test-renderer
npm install --save-dev jest-cli
npm install --save-dev nock
npm install --save-dev enzyme
npm install --save-dev enzyme-adapter-react-16
npm install --save-dev react-dom
```

## Running Jest
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

## Redux, Persist, Saga and the redux store

In our application the store and the persistor are coming from our store component, Application is our own application component.

```App.js``` 

```Javascript
<Provider store={store}>
    <PersistGate
        loading={<ActivityIndicator/>}
        onBeforeLift={onBeforeLift}
        persistor={persistor}>
        <Application/>
    </PersistGate>
</Provider>
```

We setup the store

```store/index.js```
```Javascript
const config = {
    key: 'root',
    storage,
};
const enhancers =
    [applyMiddleware(
        loggerMiddleware,
        sagaMiddleware
    )];
const persistConfig = {enhancers};
const store = createStore(persistCombineReducers(config, reducer), initialState, compose(...enhancers));
const persistor = persistStore(store, persistConfig);
sagaMiddleware.run(saga);
return {persistor, store};
```

In our reducers, we export the root reducer, but we keep each implementation inside their own reducer.

```reducers/index.js```

```Javascript
import navigator from './navigation.reducer';
import users from './users.reducer';

const rootReducer = {
    navigator,
    users
};

export default rootReducer;
```

Similar in we iterate and fork each implementation.

```sagas/index.js``` 

```Javascript
import {fork} from 'redux-saga/effects';
import users from './users.saga';

const sagas = [
    ...users
];

export default function* root() {
    yield sagas.map(saga => fork(saga));
}
```

Each saga can export a list of saga generators

```sagas/user.saga.js``` 

```Javascript
function* fetchUsersSaga() {
    yield takeEvery(FETCH_USERS, fetchUsersEffect)
}


export default [fetchUsersSaga];
```

We destructure all actions in a common action creator

```actions/index.js``` 

```Javascript
import * as Users from './users.action';

export const ActionCreators = {
    ...Users
};
```

Our action creator can be simple objects.

```actions/users.action.js``` 

```Javascript
export const fetchUsers = (page, seed) => {
    return {
        type: FETCH_USERS,
        data: {
            page,
            seed
        }
    };
};
```

## React navigation and redux

Our application  is returning our root stack navigator

```src/index.js```
```Javascript
    render() {
        const { dispatch, navigator } = this.props;
        return (
            <Navigator
                navigation={
                    addNavigationHelpers({
                        dispatch,
                        state: navigator
                    })
                }
            />
        )
    }
}

const mapStateToProps = state => ({
    navigator: state.navigator,
});

export default Application = connect(mapStateToProps)(AppWithNavigation);

```

Navigation reducer 

```reducer/navigation.reducer.js```

```Javascript
import { NavigationActions } from 'react-navigation';

import Navigator  from '../routes';

const initialState = Navigator.router.getStateForAction(NavigationActions.init);

export default (state = initialState, action) => {
    const nextState = Navigator.router.getStateForAction(action, state);
    return nextState || state;
};
```

Our application is using Tab navigation, therefore our Root navigator setup the tabs. We need headerMode to ensure we don't show another navigation bar.

```routes/index.js```

```Javascript
export default Navigator = StackNavigator(
    {
        Tabs: {
            screen: Tabs
        }

    }, {headerMode: 'none'}
);
```

We setup 2 tabs

```routes/index.js```

```Javascript
const Tabs = TabNavigator(
    {
        HomeTab: {
            screen: HomeStack,

        },
        InfoTab: {
            screen: InfoStack,

        }
    }, {

    }
);
```

To keep things clean, each tabs in contained in a separated file.

```routes/home.route.js```

```Javascript
export default HomeRoute = {
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            ...tabs.item,
            title: 'Home',
            header: (Platform.OS === 'android') ? null : navigation.header,
        })
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: ({navigation}) => ({
            ...tabs.item,
            title: 'Details'
        })
    }
};
```

We can use destructing to reassemble the navigation stack.

```routes/index.js```

```Javascript
export const HomeStack = StackNavigator({
    ...HomeRoute
});
```


# References

[Expo demonstrating how to build my app Capo Keys from scratch to deployment](https://www.youtube.com/playlist?list=PL06z42zB6YZ-9CQDX015uaeqMcSErKbes)
* Thanks to Barry Michael Doyle for this excellent tutorial about developing an application from begining to the end using Expo and Redus. Very good explanations and enjoyable to watch

[Simple React Native application with Redux](https://www.youtube.com/watch?v=3msLwu25SQY&list=PLk083BmAphjtGWyZUuo1BiCS_ZAgps6j5)
* Thanks to Jon Lebensold that provided me with the basic skeleton for redux. `createReducer.js` is interesting to simplify the reducer switch case. I haven't use it yet since it makes the reducers pattern looking different.

[FlatList and random user api](https://www.youtube.com/watch?v=r-ENJLGrd3s)
* Thanks to Spencer Carli to giving the UX idea and api as well as the good explanation how to setup FlatList

[What is the right way to do asynchronous operations in Redux?](https://decembersoft.com/posts/what-is-the-right-way-to-do-asynchronous-operations-in-redux/)
* Provides good overview of different solutions for asynchronous framework working with redux. In the end, I select redux-sagas since I like keeping my actions being plain object and reducers simple and only handling states

[Adding custom Fonts](https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e)

# Links


## Framework

[React component](https://facebook.github.io/react-native/docs/components-and-apis.html)

[React Native Elements Cross Platform React Native UI Toolkit ](https://react-native-training.github.io/react-native-elements/)

## Test

[Jest Expect](https://facebook.github.io/jest/docs/en/expect.html#content)

[Enzyme Shallow](http://airbnb.io/enzyme/docs/api/ShallowWrapper/shallow.html)

[HTTP mocking and expectations library](https://github.com/node-nock/nock)

## Tutorial

[Learning React Native](http://www.reactnativeexpress.com/)


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
