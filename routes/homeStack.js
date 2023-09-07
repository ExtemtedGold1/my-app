import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from '../src/home';
import About from '../components/about';
import addEvent from '../src/addEvent';
import Settings from "../components/settings";

const screens = {
    Home: {
        screen: Home, 
    },
    addEvent: {
        screen: addEvent,
    },
    About: {
        screen: About,
    },
    // Settings: {
    //     screen: Settings,
    // }

};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
