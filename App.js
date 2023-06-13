
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useState } from "react";
import Navigator from './routes/homeStack';


export default function App() {

  const [wydarzenie, setWydarzenie] = useState([
    { name: 'impreza', key: '1'},
    { name: 'obiad', key: '2'},
    { name: 'urodziny', key: '3'},
    { name: 'imieniny', key: '4'},
    { name: 'przypomnienie', key: '5'},
  ]);
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
  <View style={styles.header}>
      <View style={styles.buttonContainer}></View>
          <Text style={styles.boldText}>Home Page {name}</Text>
          <Text>Login</Text>
          <TextInput style={styles.input} 
          placeholder='username'
          onChangeText={(val) => setName(val)}></TextInput>
          <Text>Password</Text>
          <TextInput style={styles.input} 
          placeholder='password'
          onChangeText={(val) => setPassword(val)}></TextInput>
          <Button title="Wydarzenia"> </Button>

          { wydarzenie.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View> 
            )
          })}
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  header: {
  },
  buttonContainer: {
    backgroundColor: '#222',
    justifyContent: 'center',
  },
  boldText: {
    color: 'black',
  },
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 5,
    padding: 5,
    backgroundColor: 'pink',
    fontSize: 16,
  }
});


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




