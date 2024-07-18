import Button from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <ThemedText type='title' style={{fontWeight: 900, fontSize: 40}}>Cucumber</ThemedText>
      <ThemedText type='title' style={{color: '#AADB1E', fontWeight:800, marginTop:40}}>Report Scores</ThemedText>
      <ThemedText>Type of Game</ThemedText>
      <View style={styles.gameSelectView}>
        <Button isSelected={false} label='Singles' />
        <Button isSelected={true} label='Doubles' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },
  gameSelectView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

});
