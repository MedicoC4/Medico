import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome,FirstStep,SecondStep, ThirdStep,UserProfile,ProfileApp,Landing,DoctorPdf} from "./screens";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='DoctorPdf'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
          <Stack.Screen
          name="DoctorPdf"
          component={DoctorPdf}
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
                <Stack.Screen
          name="userProfile"
          component={UserProfile}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ProfileApp"
          component={ProfileApp}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}
