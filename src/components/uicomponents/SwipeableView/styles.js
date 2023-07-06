import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
  },
  swipeViewContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    shadowColor: 'rgba(0,0,0,0.9)',
    shadowOffset: {
      height: 2,
      width: 1
    },
    justifyContent: 'flex-start',
  },
  leadingIconStyle: {
    flexGrow: 0.10, 
    borderRadius: 8,
    justifyContent: 'center',
    flexShrink: 0.2,
    marginLeft: 10
  },
  trailingIconStyle: {
    flexGrow: 0.10, 
    borderRadius: 8,
    justifyContent: 'center',
    flexShrink: 0.2,
    marginRight: 10
  },
  taskTextStyle: {
    flexGrow: 2,
    textAlign: 'left',
    textAlignVertical: 'center',
    lineHeight: 17.32,
    paddingVertical: 10,
    flexShrink: 0.5,
    marginHorizontal: 10,
  },
  deleteIconStyle: {
    position: 'absolute',
    right: '10%',
    opacity: 0,
    padding: 20,
  }
});

export default styles;
