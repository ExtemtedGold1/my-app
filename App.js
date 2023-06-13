
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useState } from "react";
import Navigator from './routes/homeStack';
import Header from './components/header';
import ItemEvent from "./components/itemEvent";
import AddEvent from "./components/addEvent";


export default function App() {

  const [event, setEvents] = useState([
    { text: 'impreza', key: '1'},
    { text: 'obiad', key: '2'},
    { text: 'urodziny', key: '3'},
    { text: 'imieniny', key: '4'},
    { text: 'przypomnienie', key: '5'},
  ]);

  const pressHandler = (key) => {
    setEvents((prevEvents) => {
      return prevEvents.filter(event => event.key != key);
    })
  }
  
  const submitHandler = (text) => {
    Alert.alert('3')
    if(text.length > 3){
    setEvents((prevEvents) => {
      return [
        {text:text, key: Math.random().toString() },
        ...prevEvents
      ];
    });
    }
    else{
      Alert.alert('Wrong', 'Wydarzenie musi miec co najmniej 3 litery', [
        {text: 'Jasne', onPress: () => console.log('alert')}
      ])
    }
  }

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    hideSplashScreen();
  }, []);

  async function hideSplashScreen() {
    await SplashScreen.hideAsync();
  }

return(
  <View style={styles.container}> 
    <Header/>
      <View style={styles.content}>
          <Text>Login</Text>
        
          <TextInput style={styles.input} 
          placeholder='username'
          onChangeText={(val) => setName(val)}></TextInput>

          <Text>Password</Text>

          <TextInput style={styles.input} 
          placeholder='password'
          onChangeText={(val) => setPassword(val)}></TextInput>

          <View style={styles.buttonContainer}>

          <AddEvent submitHandler={submitHandler}/>

          <Button title="Wydarzenia"> </Button>

          </View>

          <View style={styles.list}>
          <FlatList data={event} renderItem={({item}) => {
            // <Text style={styles.item}>{item.text}</Text>
          return <ItemEvent item={item} pressHandler={pressHandler}/>
          }}/>
          </View>

          <View>
            { event.map((item) =>{
              return (
                <View>
                  <Text>{item.text}</Text>
                </View>
              )
            })}
          </View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list:{
    marginTop: 20,
    backgroundColor: 'pink',
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item:{
    textAlign: 'center',
    color: '#fff',
    fontSize:20,
    fontWeight:'bold',
  }
});

/*
{ wydarzenie.map((item) => {
  return (
    <View key={item.key}>
      <Text style={styles.item}>{item.name}</Text>
    </View> 
  )
})}*/

/*import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Navigator from './routes/homeStack';

export default function App() {
  const [addEventScreen, setAddEventScreen] = useState(false);
  const [events, setEvents] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [showAbout, setShowAbout] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    hideSplashScreen();
  }, []);

  async function hideSplashScreen() {
    await SplashScreen.hideAsync();
  }

  const goAbout = () => {
    setShowAbout(true);
    setShowSettings(false);
  };

  const handleAddEventPress = () => {
    setAddEventScreen(true);
  };

  const goSettings = () => {
    setShowSettings(true);
    setShowAbout(false);
  };

  const handleAddEvent = () => {
    const newEvent = {
      name,
      date,
      time,
      place,
    };
    setEvents([...events, newEvent]);
    setName('');
    setDate('');
    setTime('');
    setPlace('');
    setAddEventScreen(false);
  };

  const AddEventForm = () => {
    return (
      <View style={styles.returnform}>
        <TextInput
          placeholder='nameEvent'
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder='Data'
          value={date}
          onChangeText={text => setDate(text)}
        />
        <TextInput
          placeholder='Time'
          value={time}
          onChangeText={text => setTime(text)}
        />
        <TextInput
          placeholder='Place'
          value={place}
          onChangeText={text => setPlace(text)}
        />
        <Button title='Dodaj wydarzenie' onPress={handleAddEvent} />
      </View>
    );
  };

  useEffect(() => {
    console.log(events);
  }, [events]);

  const renderAbout = () => {
    return (
      <View>
        <Text>Aplikacji dla wszystkich użytkowników z brakiem pamięci!</Text>
        <Text>Autorzy:</Text>
        <Text>Wiktor Bielecki</Text>
      </View>
    );
  };

  const renderSettings = () => {
    return (
      <View>
        <Text>Ustawienia</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Witaj w aplikacji</Text>
      {!addEventScreen ? (
        <Button title='addEvent' onPress={handleAddEventPress}>
          Dodaj wydarzenie
        </Button>
      ) : (
        <AddEventForm />
      )}
      <Button title='about' onPress={goAbout}>
        O nas
      </Button>
      <Button title='settings' onPress={goSettings}>
        Ustawienia
      </Button>
      <StatusBar style="auto" />
      {events.length > 0 && (
        <View>
          <Text>Lista wydarzeń:</Text>
          {events.map((event, index) => (
            <Text style={styles.returnform} key={index}>
              {JSON.stringify(event)}
            </Text>
          ))}
        </View>
      )}
      {showAbout && renderAbout()}
      {showSettings && renderSettings()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  returnform: {
    borderBottomColor: 'black',
    backgroundColor: '#b1bccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/










//-----------------------------------------------------------------//






/*import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Navigator from './routes/homeStack';
//import { getAppSettings } from 'settings';

export default function App() {
  const [addEventScreen, setAddEventScreen] = useState(false);
  const [events, setEvents] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');

  useEffect(() => {
    hideSplashScreen();
  }, []);

  async function hideSplashScreen() {
    await SplashScreen.hideAsync();
  }

  const goAbout = () => {
    
  }

  const handleAddEventPress = () => {
    setAddEventScreen(true);
  }

  const goSettings = () => {
      //const appSettings = getAppSettings(); 
  }

  const handleAddEvent = () => {
    const newEvent = {
      name,
      date,
      time,
      place,
    };
    setEvents([...events, newEvent]);
    setName('');
    setDate('');
    setTime('');
    setPlace('');
    setAddEventScreen(false);
  }

  const AddEventForm = () => {
    return (
      <View style={styles.returnform}>
        <TextInput
          placeholder='nameEvent'
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder='Data'
          value={date}
          onChangeText={text => setDate(text)}
        />
        <TextInput
          placeholder='Time'
          value={time}
          onChangeText={text => setTime(text)}
        />
        <TextInput
          placeholder='Place'
          value={place}
          onChangeText={text => setPlace(text)}
        />
        <Button title='Dodaj wydarzenie' onPress={handleAddEvent} />
      </View>
    )
  };

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <View style={styles.container}>
      <Text>Witaj w aplikacji</Text>
      {!addEventScreen ? (
        <Button title='addEvent' onPress={handleAddEventPress}>
          Dodaj wydarzenie
        </Button>
      ) : (
        <AddEventForm />
      )}
      <Button title='about' onPress={goAbout}>
        O nas
      </Button>
      <Button title='settings' onPress={goSettings}>
        Ustawienia
      </Button>
      <StatusBar style="auto" />
      {events.length > 0 && (
        <View>
          <Text>Lista wydarzeń:</Text>
          {events.map((event, index) => (
            <Text style={styles.returnform} key={index}>{JSON.stringify(event)}</Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  returnform: {
    borderBottomColor: 'black',
    backgroundColor: '#b1bccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/




