import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  function req(){
    

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(function(json){
    alert(json.id);
  })
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={()=>req()}>
        <Text>Click here !</Text>
      </TouchableOpacity>
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
});
