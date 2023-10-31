import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome,FirstStep,SecondStep, ThirdStep} from "./screens";
import Landing from './screens/Landing';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello Ya rojla</Text>
    //   <Button
    //   title="learn more"
    //   color="#f194ff"
    //   onPress={() => Alert.alert('Simple Button pressed')}
    //   />
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='FirstStep'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
          <Stack.Screen
          name="FirstStep"
          component={FirstStep}
          options={{
            headerShown: false
          }}
        />
          <Stack.Screen
          name="SecondStep"
          component={SecondStep}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ThirdStep"
          component={ThirdStep}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
