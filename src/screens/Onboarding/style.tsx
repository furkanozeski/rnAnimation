import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 12
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dotContainerView: {
    flexDirection: 'row',
    marginVertical: 26,
    columnGap: 20
  },
  dotView: {
    width: 22,
    height: 5,
    borderRadius: 8,
    backgroundColor: 'red',
  }
});
