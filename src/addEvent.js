// import React from 'react';
// import { View, Button, Alert, TextInput } from 'react-native';

// const addEventButton = ({ onAddEvent }) => {
//   const [eventText, setEventText] = useState('') 

//   const addEvent = () => {
//     if(eventText) {
//       onAddEvent(eventText);//
//       setEventText('');
//       Alert.alert('Dodano wydarzenie', 'Wydarzenie zostało dodane.');
//     } else {
//       Alert.alert('Błąd', 'Proszę wprowadzić treść wydarzenia.');
//     }
//   };

//   return(
//     <View>
//       <TextInput
//         placeholder="Wprowadź treść wydarzenia"
//         value={eventText}
//         onChangeText={(text) => setEventText(text)} // Aktualizacja stanu po wprowadzeniu tekstu
//       />
//       <Button title="Dodaj wydarzenie" onPress={addEvent} />
//     </View>
//   );
// };

// export default addEventButton;
