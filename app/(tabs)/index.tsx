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
        <Button isSelected={true} style={{marginLeft: 20}} label='Doubles' />
      </View>
      <ThemedText style={{marginTop: 10}}>Game Info</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 30
  },
  gameSelectView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  }

});
