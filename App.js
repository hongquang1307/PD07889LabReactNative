import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Student from './components/Student';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Lab1Screen from './components/Home';
import Bai1 from './Lab/Lab1/Bai1';
import Bai2 from './Lab/Lab1/Bai2';
import Bai3Lab1 from './Lab/Lab1/Bai3';
import Main from './componentss/Main';
import Lab2Screen from './Lab/Lab2/lab2_home';
import Lab3Screen from './Lab/Lab3/lab3_home';
import Move from './Lab/Lab3/Move';
import Bai2Lab3 from './Lab/Lab3/bai2';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
 
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Lab1"
        component={Lab1Screen}
        options={{ title: "Lab 1" }}
      />
      <Stack.Screen
        name="Lab2"
        component={Lab2Screen}
        options={{ title: "Lab 2" }}
      />
      <Stack.Screen
        name="Lab3"
        component={Lab3Screen}
        options={{ title: "Lab 3" }}
      />
      <Stack.Screen
        name="bai1lap1"
        component={Bai1}
        options={{ title: "Bài 1 Lab 1" }}
      />
      <Stack.Screen
        name="bai2lab1"
        component={Bai2}
        options={{ title: "Bài 2 Lab 1" }}
      />
      <Stack.Screen
        name="bai3lab1"
        component={Bai3Lab1}
        options={{ title: "Lab 3" }}
      />
        <Stack.Screen
          name="lab2React"
          component={Main}
          options={{ title: "lab2" }}
        />
        
        <Stack.Screen
          name="Lab3React"
          component={Move}
          options={{ title: "Bai1lab3" }}
        />
        <Stack.Screen
          name="LAb3Bai2React"
          component={Bai2Lab3}
          options={{ title: "Bai2lab3" }}
        />
        
        
      {/* Thêm các màn hình cho các lab khác tại đây */}
    </Stack.Navigator>
  </NavigationContainer>
);
};

const MenuScreen = ({ navigation }) => {
return (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.labMenuItem}
      onPress={() => navigation.navigate("Lab1")}
    >
      <Text style={styles.menuText}>Lab 1</Text>
    </TouchableOpacity>  
    <TouchableOpacity
      style={styles.labMenuItem}
      onPress={() => navigation.navigate("Lab2")}
    >
      <Text style={styles.menuText}>Lab 2</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.labMenuItem}
      onPress={() => navigation.navigate("Lab3")}
    >
      <Text style={styles.menuText}>Lab 3</Text>
    </TouchableOpacity>
    {/* Thêm các mục menu cho các lab khác tại đây */}
  </View>
);
};


// Thêm các màn hình cho các lab khác tại đây

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f0f0",
},
labMenuItem: {
  marginBottom: 10,
  paddingVertical: 15,
  paddingHorizontal: 20,
  backgroundColor: "#fff",
  borderRadius: 10,
  elevation: 3,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
},
menuText: {
  fontSize: 18,
  fontWeight: "bold",
},
labScreenContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
},
screenText: {
  fontSize: 24,
  fontWeight: "bold",
},
});

    


export default App;