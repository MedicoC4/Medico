import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions
} from 'react-native';
import Button from '../components/Button';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const { width, height } = Dimensions.get("window");
import COLORS from '../constants/colors';

export default function Example() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F4EFF3' }}>
      <View style={styles.container}>
        <View style={styles.header}>

          <Text style={styles.title}>Create Account</Text>
        </View>

        <KeyboardAwareScrollView>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Username</Text>

              <TextInput
                onChangeText={username => setForm({ ...form, username })}
                placeholder="e.g. johndoe"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.username}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>First Name</Text>

              <TextInput
                onChangeText={firstName => setForm({ ...form, firstName })}
                placeholder="e.g. John"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.firstName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Last Name</Text>

              <TextInput
                onChangeText={lastName => setForm({ ...form, lastName })}
                placeholder="e.g. Doe"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.lastName}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email address</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={email => setForm({ ...form, email })}
                placeholder="e.g. john@example.com"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>

            <View style={styles.formAction}>
            <Button
                  titleStyle={{
                    color: "#FFFFFF"
                 }}
                title="Continue"
                filled
                style={{
                                width: width*0.85,
                                backgroundColor: COLORS.primary,
                                color: COLORS.white
                            }}
                        />
            </View>
        
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    paddingHorizontal: 24,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffdada',
    marginBottom: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 36,
  },
  form: {
    paddingHorizontal: 24,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    color: '#9fa5af',
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginBottom: 6,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#24262e',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    marginBottom: 16,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: 1,
    backgroundColor: '#FD6B68',
    borderColor: '#FD6B68',
  },
});