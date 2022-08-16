import { View, ActivityIndicator } from 'react-native';

import { styles } from './styles';

export function LoadIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}