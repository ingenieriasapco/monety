import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    borderColor: '#053',
    fontSize : 20,
    height: 50,
    margin: 5,
    paddingHorizontal: 20,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  numbers : {
    fontSize : 40,
    paddingHorizontal : 10,
    paddingTop : 1,
    paddingBottom : 5,
    textAlign : 'right',
    borderColor: 'transparent',
    borderWidth: 1,
    height: 50,
  },
  label : {
    fontSize : 20,
    paddingHorizontal: 10,
  },
  result : {
    textAlign : 'right',
  }
});

exports.styles = styles;
