import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome,FirstStep,SecondStep, ThirdStep,DoctorPdf,FinishSignUp,ProfileApp,Settings,UserProfilePage,PharmacyProfile,Promotions,BestSellers,AllMissingProducts} from "./screens";
import Landing from './screens/Landing';
import UserProfile from './screens/UserProfile';
import DocFirstStep from './screens/docFirstStep';
import DocSecondStep from './screens/docSecounStep';
import UpgradeDocForm from './screens/UpgradeDocForm';
import MapLocation from './screens/MapLocation';
import AllPharmacies from './screens/AllPharmacies';
import AllMedicines from './screens/AllMedecines';
import MedicineDetails from './screens/MedecineDetails';
import UserMap from './screens/UserMap';
// import UserProfilePage from './screens/UserProfilePage';
import { UserProvider } from './constants/userProvier';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='userMap'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="AllMissingProducts"
          component={AllMissingProducts}
          options={{
            headerShown: false,
          }}
        />
<Stack.Screen
          name="Promotions"
          component={Promotions}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="BestSellers"
          component={BestSellers}
          options={{
            headerShown: false,
          }}
        />

          <Stack.Screen
          name="PharmacyProfile"
          component={PharmacyProfile}
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
            headerShown: false
          }}
        />
        <Stack.Screen
          name="DocSecoundStep"
          component={DocSecondStep}
          options={{
            headerShown: false
          }}
        />
          <Stack.Screen
          name="upgradeToDoc"
          component={UpgradeDocForm}
          options={{
            headerShown: false,
          }}
        />
       
        <Stack.Screen
          name="map"
          component={MapLocation}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="AllPharmacies"
          component={AllPharmacies}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="AllMedicines"
          component={AllMedicines}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="MedicineDetails"
          component={MedicineDetails}

          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="userMap"
          component={UserMap}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>

      
    </NavigationContainer>
    </UserProvider>
  );
}
