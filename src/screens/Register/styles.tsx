import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  textInputBoxStyle: {
    borderWidth: 1,
    borderRadius: 4,
    paddingLeft: 14,
  },
  registerButtonStyle: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  headlineStyle: {
    fontWeight: '700',
    fontSize: 32,
  },
  textInputLabelStyle: {
    fontWeight: '400',
    fontSize: 16,
    paddingBottom: 8,
  }
});
