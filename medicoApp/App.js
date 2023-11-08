import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome,FirstStep,SecondStep, ThirdStep,DoctorPdf,FinishSignUp,ProfileApp,Settings,UserProfilePage,PharmacyProfile,Promotions,BestSellers,AllMissingProducts} from "./screens";
import Landing from './screens/Landing';
import UserProfile from './screens/UserProfile';
import DocFirstStep from './screens/docFirstStep';
import DocSecondStep from './screens/docSecounStep';
import UpgradeDocFirstForm from './screens/UpgradeDocFirstForm';
import MapLocation from './screens/MapLocation';
import AllPharmacies from './screens/AllPharmacies';
import PharmFirstStep from './screens/PharmFirstStep'
import PharmSecondStep from './screens/PharmSecoundStep'
import UpgradeToPharm from './screens/UpgradeToPharm'
import AllMedicines from './screens/AllMedecines';
import MedicineDetails from './screens/MedecineDetails';
import UserMap from './screens/UserMap';
import DocProfile from './screens/DocProfile'
import { UserProvider } from './constants/userProvier';
import UpgradeDocSecoundForm from './screens/UpgradeDocSecoundForm'
import PharmSecoundForm from './screens/PharmSecoundForm';
import PharmFirstForm from './screens/PharmFirstForm';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator

        initialRouteName='Login'
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
          component={UpgradeDocFirstForm}
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
          name="UpgradeDocSecoundForm"
          component={UpgradeDocSecoundForm}

          options={{
            headerShown: false
          }}
          />
        <Stack.Screen
          name="pharmFirstStep"
          component={PharmFirstStep}

          options={{
            headerShown: false
          }}
          />

        <Stack.Screen
          name="PharmSecoundStep"
          component={PharmSecondStep}

          options={{
            headerShown: false
          }}
          />
        <Stack.Screen
          name="UpgradeToPharm"
          component={UpgradeToPharm}

          options={{
            headerShown: false
          }}
          />
        <Stack.Screen
          name="PharmSecoundForm"
          component={PharmSecoundForm}

          options={{
            headerShown: false
          }}
          />
        <Stack.Screen
          name="PharmFirstForm"
          component={PharmFirstForm}

          options={{
            headerShown: false
          }}
          />
       
      </Stack.Navigator>

      
    </NavigationContainer>
    </UserProvider>
  );
}