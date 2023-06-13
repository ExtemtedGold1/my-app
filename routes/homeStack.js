import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../src/home';
import About from '../src/about';
//import addEvent from '../src/addEvent';

const screens = {
    Home: {
        screen: Home 
    },
    /*addEvent: {
        screen: addEvent
    },*/
    About: {
        screen: About
    }  
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
