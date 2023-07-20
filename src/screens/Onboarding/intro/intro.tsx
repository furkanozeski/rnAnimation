import React, { useContext } from 'react';
import { ThemeValueContext } from '@src/providers/ThemeProvider/ThemeProvider';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../style';

export default function Intro({ navigation }) {
  const theme = useContext(ThemeValueContext);

  return (
    <View style={[styles.introScreenMainContainer, { backgroundColor: theme?.colorScheme.background }]}>
      <View style={[styles.introScreenTextWrapperViewContainer, { backgroundColor: theme?.colorScheme.background }]}>
        <Text style={[styles.introScreenHeadlineText, { color: theme?.colorScheme?.textColor }]}>Welcome to UpTodo</Text>
        <Text
          style={[styles.introScreenDescriptionText, { color: theme?.colorScheme?.textColor }]}
        >
          Please login to your account or create new account to continue
        </Text>
      </View>

      <View style={styles.introScreenButtonViewContainer}>

        <TouchableOpacity
          style={[styles.introScreenLoginButton, {
            backgroundColor: theme?.colorScheme.primary
          }]}
          onPress={() => {
            navigation?.push('login-after-onboard');
          }}
        >
          <Text style={{ textAlign: 'center', color: theme?.colorScheme.textColor }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.introScreenCreateAccountButton, {
            borderColor: theme?.colorScheme.primary
          }]}
          onPress={() => {
            navigation?.push('register-after-onboard');
          }}
        >
          <Text style={{ color: theme?.colorScheme.textColor }}>
            Create Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.introScreenCountinueAsAnonButton, { backgroundColor: theme?.colorScheme.secondary, }]}
        >
          <Text style={{ color: theme?.colorScheme.onSecondary, paddingVertical: 20 }}>Continue As Anonymous</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
