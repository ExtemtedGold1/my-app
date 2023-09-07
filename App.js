import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList } from 'react-native';
import * as FileSystem from 'expo-file-system';
import Header from "./components/header";
import Settings from "./components/settings";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";

//const Stack = createStackNavigator();

export default function App() {
  const [events, setEvents] = useState([]);
  const [text, setText] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Wczytaj dane z pliku po uruchomieniu aplikacji
    loadEventData();
  }, []);

  const pressHandler = async (key) => {
    // Usuń wydarzenie
    const updatedEvents = events.filter((item) => item.key !== key);
    setEvents(updatedEvents);

    // Zapisz zmienioną listę do pliku
    try {
      await saveEventData(updatedEvents);
    } catch (error) {
      console.error('Błąd przy zapisywaniu danych: ', error);
    }
  };

  const submitHandler = async () => {
    if (text.length > 3) {
      const newEvent = { text: text, key: Math.random().toString() };
      setEvents([newEvent, ...events]);
      setText('');

      // Zapisz zmienioną listę do pliku
      try {
        const updatedEvents = [newEvent, ...events];
        await saveEventData(updatedEvents);
      } catch (error) {
        console.error('Błąd przy zapisywaniu danych: ', error);
      }
    } else {
      Alert.alert('Błąd', 'Wydarzenie musi mieć co najmniej 3 litery', [
        { text: 'OK', onPress: () => console.log('alert') },
      ]);
    }
  };

  const loadEventData = async () => {
    try {
      const dataDirectory = `${FileSystem.documentDirectory}data/`;
      const filePath = `${dataDirectory}events.json`;

      // Sprawdź, czy plik istnieje
      const fileInfo = await FileSystem.getInfoAsync(filePath);

      if (fileInfo.exists) {
        const fileContent = await FileSystem.readAsStringAsync(filePath);
        setEvents(JSON.parse(fileContent));
      }
    } catch (error) {
      console.error('Błąd przy wczytywaniu danych: ', error);
    }
  };

  const saveEventData = async (data) => {
    try {
      const dataDirectory = `${FileSystem.documentDirectory}data/`;
      const filePath = `${dataDirectory}events.json`;

      // Sprawdź, czy katalog istnieje
      const directoryInfo = await FileSystem.getInfoAsync(dataDirectory);

      if (!directoryInfo.exists) {
        await FileSystem.makeDirectoryAsync(dataDirectory, { intermediates: true });
      }

      // Zapisz dane do pliku
      await FileSystem.writeAsStringAsync(filePath, JSON.stringify(data), {
        encoding: FileSystem.EncodingType.UTF8,
      });
    } catch (error) {
      console.error('Błąd przy zapisywaniu danych: ', error);
    }
  };

  const showEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Nowe Wydarzenie"
          value={text}
          onChangeText={(val) => setText(val)}
        />
        <Button onPress={submitHandler} title="Dodaj Wydarzenie" color="#1d67de" />
      </View>

      <View style={styles.list}>
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.item}>{item.text}</Text>
              <Button
                title="Usuń"
                onPress={() => pressHandler(item.key)}
                color="red"
              />
              <Button
                title="Szczegóły"
                onPress={() => showEventDetails(item)}
                color="#1d67de"
              />
            </View>
          )}
        />
      </View>

      {selectedEvent && (
        <View style={styles.eventDetails}>
          <Text style={styles.eventDetailsText}>{selectedEvent.text}</Text>
          <Button title="Zamknij" onPress={closeEventDetails} color="#1d67de" />
        </View>
      )}
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
  list: {
    marginTop: 20,
    backgroundColor: 'grey',
    color: 'white',
  },
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventDetails: {
    backgroundColor: 'lightblue',
    padding: 20,
    margin: 10,
  },
  eventDetailsText: {
    fontSize: 18,
  },
});


// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList } from 'react-native';
// import * as FileSystem from 'expo-file-system';

// export default function App() {
//   const [event, setEvents] = useState([]);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     // Wczytaj dane z pliku po uruchomieniu aplikacji
//     loadEventData();
//   }, []);

//   const pressHandler = async (key) => {
//     // Usuń wydarzenie
//     const updatedEvents = event.filter((item) => item.key !== key);
//     setEvents(updatedEvents);

//     // Zapisz zmienioną listę do pliku
//     try {
//       await saveEventData(updatedEvents);
//     } catch (error) {
//       console.error('Błąd przy zapisywaniu danych: ', error);
//     }
//   };

//   const submitHandler = async () => {
//     if (text.length > 3) {
//       const newEvent = { text: text, key: Math.random().toString() };
//       setEvents([newEvent, ...event]);
//       setText('');

//       // Zapisz zmienioną listę do pliku
//       try {
//         const updatedEvents = [newEvent, ...event];
//         await saveEventData(updatedEvents);
//       } catch (error) {
//         console.error('Błąd przy zapisywaniu danych: ', error);
//       }
//     } else {
//       Alert.alert('Błąd', 'Wydarzenie musi mieć co najmniej 3 litery', [
//         { text: 'OK', onPress: () => console.log('alert') },
//       ]);
//     }
//   };

//   const loadEventData = async () => {
//     try {
//       const dataDirectory = `${FileSystem.documentDirectory}data/`;
//       const filePath = `${dataDirectory}events.json`;

//       // Sprawdź, czy plik istnieje
//       const fileInfo = await FileSystem.getInfoAsync(filePath);

//       if (fileInfo.exists) {
//         const fileContent = await FileSystem.readAsStringAsync(filePath);
//         setEvents(JSON.parse(fileContent));
//       }
//     } catch (error) {
//       console.error('Błąd przy wczytywaniu danych: ', error);
//     }
//   };

//   const saveEventData = async (data) => {
//     try {
//       const dataDirectory = `${FileSystem.documentDirectory}data/`;
//       const filePath = `${dataDirectory}events.json`;

//       // Sprawdź, czy katalog istnieje
//       const directoryInfo = await FileSystem.getInfoAsync(dataDirectory);

//       if (!directoryInfo.exists) {
//         await FileSystem.makeDirectoryAsync(dataDirectory, { intermediates: true });
//       }

//       // Zapisz dane do pliku
//       await FileSystem.writeAsStringAsync(filePath, JSON.stringify(data), {
//         encoding: FileSystem.EncodingType.UTF8,
//       });
//     } catch (error) {
//       console.error('Błąd przy zapisywaniu danych: ', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         <TextInput
//           style={styles.input}
//           placeholder="Nowe Wydarzenie"
//           value={text}
//           onChangeText={(val) => setText(val)}
//         />
//         <Button onPress={submitHandler} title="Dodaj Wydarzenie" color="#1d67de" />
//       </View>

//       <View style={styles.list}>
//         <FlatList
//           data={event}
//           renderItem={({ item }) => (
//             <View>
//               <Text style={styles.item}>{item.text}</Text>
//               <Button
//                 title="Usuń"
//                 onPress={() => pressHandler(item.key)}
//                 color="red"
//               />
//             </View>
//           )}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     padding: 40,
//   },
//   list: {
//     marginTop: 20,
//     backgroundColor: 'grey',
//     color: 'white',
//   },
//   input: {
//     borderWidth: 2,
//     borderColor: 'grey',
//     padding: 8,
//     margin: 10,
//     width: 200,
//   },
//   item: {
//     textAlign: 'center',
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });


