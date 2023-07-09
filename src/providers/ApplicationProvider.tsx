import Firestore from '@src/data/FireBase/FireBase';
import { createTask } from '@src/data/Task';
import AppProviderProp from '@src/types/AppProvider/AppProviderPropType';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

function ApplicationProvider(_props: AppProviderProp) {
  const { children } = _props;
  const [userToken, setUserToken] = React.useState('');
  const [did, setDid] = React.useState(false);


  useEffect(() => {


    // Firestore.auth.signInWithEmailAndPassword('furkan.ozeski@hotmail.com', 'Test!9');
    if (!did) {
      Firestore.auth
        .currentUser
        ?.getIdTokenResult()
        .then((token) => { setUserToken(token.claims.sub); })
        .catch((error) => { console.log('error on getting token, ', error); });
      setDid(true);
    }

  }, [did]);

  const _createTask = () => {
    createTask(userToken);
  }


  return (
    <View>

      <TouchableOpacity>
        <Text>
          GetTask
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={_createTask} style={{ height: '50%', justifyContent: 'center', backgroundColor: 'red' }}>
        <Text>
          Create tasks
        </Text>
      </TouchableOpacity>
      {children}
    </View>
  );
}

export default ApplicationProvider;
