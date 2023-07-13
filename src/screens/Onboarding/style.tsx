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
    alignItems: 'center',
    marginTop: 40,

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
  },
  textView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '95%',
  },
  textViewHeadline: {
    padding: 20,
    marginBottom: 30,
    marginTop: 34
  },
  headlineText: {
    fontSize: 32,
    fontWeight: '700',
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '400'
  },
  prevButton: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black'
  },
  prevButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black'
  },
  nextButton: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '400',
  }
});
