import React, { useState, useContext, useEffect } from 'react';
import { ThemeValueContext } from '@src/providers/ThemeProvider/ThemeProvider';
import {
  View, Text, TextInput, TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { validation } from './validation';

export default function Register() {

  const theme = useContext(ThemeValueContext);

  const [forms, setForms] = useState({
    userName: '',
    password: '',
    confirmPassword: ''
  });

  const [isFocused, setIsFocused] = useState({
    userName: false,
    password: false,
    confirmPassword: false
  });

  const [isFormValid, setIsFormValid] = useState({
    userName: false,
    password: false,
    confirmPassword: false,
    isAllValid: false
  });

  useEffect(() => {
    setIsFormValid((prev) => ({
      ...prev,
      password: validation.isPasswordNotEmpty(forms.password) && validation.isPasswordSatisfiedMaxLen(forms.password),
      confirmPassword: validation.isPasswordsSame(forms.password, forms.confirmPassword),
      userName: validation.onNameValidation(forms.userName)
    }));
  }, [forms.userName, forms.password, forms.confirmPassword]);


  useEffect(() => {
    if (isFormValid.confirmPassword && isFormValid.password && isFormValid.userName) {
      setIsFormValid((prev) => ({
        ...prev,
        isAllValid: true
      }));
    } else {
      setIsFormValid((prev) => ({
        ...prev,
        isAllValid: false
      }));
    }
  }, [isFormValid.confirmPassword, isFormValid.password, isFormValid.userName]);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 53,
        backgroundColor: theme?.colorScheme.background
      }}
    >
      <Text
        style={[
          styles.headlineStyle,
          { color: theme?.colorScheme.textColor }
        ]}
      >
        Register
      </Text>

      <View
        style={{
          marginTop: 23,
        }}
      >
        <Text
          style={[styles.textInputLabelStyle, {
            color: theme?.colorScheme.textColor,
          }]}
        >
          Username
        </Text>
        <TextInput
          style={[styles.textInputBoxStyle, {
            color: theme?.colorScheme.textColor,
            backgroundColor: theme?.colorScheme.background,
            borderColor: theme?.colorScheme.tertiary,
          }]}
          placeholder="Username"
          placeholderTextColor={theme?.colorScheme.textColor}
          value={forms.userName}
          onChangeText={(text) => {
            setForms((prev) => ({
              ...prev,
              userName: text
            }));
          }}

        />
      </View>

      <View
        style={{
          marginVertical: 25
        }}
      >
        <Text
          style={[styles.textInputLabelStyle, {
            color: theme?.colorScheme.textColor,
          }]}
        >
          Password
        </Text>
        <TextInput
          style={[styles.textInputBoxStyle, {
            backgroundColor: theme?.colorScheme.background,
            color: theme?.colorScheme.textColor,
            borderColor: theme?.colorScheme.tertiary,
          }]}
          placeholder="Password"
          placeholderTextColor={theme?.colorScheme.textColor}
          value={forms.password}
          onChangeText={(text) => {
            setForms((prev) => ({
              ...prev,
              password: text
            }));
          }}
        />
      </View>

      <View>
        <Text
          style={[styles.textInputLabelStyle, {
            color: theme?.colorScheme.textColor,
          }]}
        >
          Confirm Password
        </Text>
        <TextInput
          style={[styles.textInputBoxStyle, {
            backgroundColor: theme?.colorScheme.background,
            color: theme?.colorScheme.textColor,
            borderColor: theme?.colorScheme.tertiary
          }]}
          placeholder="Confirm Password"
          placeholderTextColor={theme?.colorScheme.textColor}
          value={forms.confirmPassword}
          onChangeText={(text) => {
            setForms((prev) => ({
              ...prev,
              confirmPassword: text
            }));
          }}
        />
      </View>

      <TouchableOpacity
        style={[styles.registerButtonStyle, {
          backgroundColor: isFormValid.isAllValid ? theme?.colorScheme.primary : theme?.colorScheme.tertiary
        }]}
        disabled={!isFormValid.isAllValid}
      >
        <Text
          style={[styles.textInputLabelStyle, {
            color: isFormValid.isAllValid ? theme?.colorScheme.textColor : theme?.colorScheme.onTertiary,
            paddingBottom: 0
          }]}
        >
          Register
        </Text>
      </TouchableOpacity>

    </View>
  );
}
