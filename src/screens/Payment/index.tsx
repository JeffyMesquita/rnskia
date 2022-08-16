import { View } from 'react-native';
import { CreditCard } from '../../components/CreditCard';

import { styles } from './styles';

export function Payment() {
  return (
    <View style={styles.container}>
      <CreditCard />
    </View>
  );
}