import { shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { dateToString } from '../Utils';

export default function MemoDetailScreen(props) {
  // eslint-disable-next-line react/prop-types
  const { navigation, route } = props;
  // eslint-disable-next-line react/prop-types
  const { id } = route.params;
  // eslint-disable-next-line no-shadow
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <ScrollView>
        <View style={styles.memoBodyInner}>
          <Text style={styles.memoText}>
            {memo && memo.bodyText}
          </Text>
        </View>
      </ScrollView>
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="pencil"
        onPress={() => { navigation.navigate('MemoEdit', { id: memo.id, bodyText: memo.bodyText }); }}
      />
    </View>
  );
}

MemoDetailScreen.propType = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#05FF00',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#862121',
    fontSize: 24,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#862121',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBodyInner: {
    paddingTop: 32,
    paddingBottom: 80,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
  },
});
