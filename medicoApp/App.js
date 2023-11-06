import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome,FirstStep,SecondStep, ThirdStep,DoctorPdf,FinishSignUp,ProfileApp,Settings,UserProfilePage} from "./screens";
import Landing from './screens/Landing';
import UserProfile from './screens/UserProfile';
import DocFirstStep from './screens/docFirstStep';
import DocSecondStep from './screens/docSecounStep';
import UpgradeDocForm from './screens/UpgradeDocForm';
import MapLocation from './screens/MapLocation';
import AllPharmacies from './screens/AllPharmacies';
import AllMedicines from './screens/AllMedecines';
import MedicineDetails from './screens/MedecineDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='FirstStep'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Settings"
          component={Settings}
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
          <Stack.Screen
          name="DoctorPdf"
          component={DoctorPdf}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FinishSignUp"
          component={FinishSignUp}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="FinishSignUp"
          component={FinishSignUp}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FirstStep"
          component={FirstStep}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SecondStep"
          component={SecondStep}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ThirdStep"
          component={ThirdStep}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="userProfile"
          component={UserProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="userProfilePage"
          component={UserProfilePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DocFirstStep"
          component={DocFirstStep}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DocSecoundStep"
          component={DocSecondStep}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UpgradeToDoc"
          component={UpgradeDocForm}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="map"
          component={MapLocation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AllPharmacies"
          component={AllPharmacies}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AllMedicines"
          component={AllMedicines}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MedicineDetails"
          component={MedicineDetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
