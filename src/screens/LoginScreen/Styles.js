import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeBackground: {
      display: 'flex',
      alignItems: 'center'
    },
    logo: {
      marginTop: 100,
      margin: 40,
      width: 205,
      height: 200
    },
    logInInputsContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      width: '100%'
    },
    logInInputContainer: {
      width: '45%',
      borderColor: '#850998',
      borderBottomWidth: 0.7
    },
    logInInputText: {
      marginBottom: -5,
      margin: 5,
      fontSize: 15
    },
    logInButton: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 15,
      paddingTop: 10,
      paddingBottom: 10,
      width: '40%',
      borderRadius: 20,
      // backgroundColor: "#94308a" // from logo
      // backgroundColor: '#A323B6' // too bright?
      backgroundColor: '#A11CB5'
    },
    logInButtonText: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 16
    },
    registrationTextContainer: {
      flexDirection: 'row'
      // justifyContent: 'space-between'
    },
    registerText: {
      color: '#858585',
      fontSize: 15
    }
  });
