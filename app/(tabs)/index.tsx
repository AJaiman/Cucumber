import Button from '@/components/Button';
import Court from '@/components/Court';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

type PlayerCardProps = {
  color: string
  playerNumber: string
}

function PlayerCard(props: PlayerCardProps) {

  const [player, onChangePlayer] = useState('')

  if (props.color === 'rgba(255, 45, 45, 1') {
    return (
      <GestureHandlerRootView style={styles.test}>
        <FontAwesome style={{marginRight: 10}} name="user" size={24} color='black' />
        <TextInput 
          style={styles.playerInput}
          placeholder={'Player ' + props.playerNumber}
          onChangeText={onChangePlayer}
          value={player}
        />
      </GestureHandlerRootView>
    )
  }
  return null
}

export default function HomeScreen() {

  const [isSingles, setIsSingles] = useState(true);

  const onPressSingles = () => {
    setIsSingles(true);
  }

  const onPressDoubles = () => {
    setIsSingles(false);
  }



  return (
    <View style={styles.mainContainer}>
      <ThemedText type='title' style={{fontWeight: 900, fontSize: 40}}>Cucumber</ThemedText>
      <ThemedText type='title' style={{color: '#AADB1E', fontWeight:800, marginTop:40}}>Report Scores</ThemedText>
      <ThemedText>Type of Game</ThemedText>
      <View style={styles.gameSelectView}>
        <Button isSelected={isSingles} onPress={onPressSingles} label='Singles' />
        <Button isSelected={!isSingles} onPress={onPressDoubles} style={{marginLeft: 20}} label='Doubles' />
      </View>
      <ThemedText style={{marginTop: 10}}>Game Info</ThemedText>
      <Court>
        <PlayerCard playerNumber='1' color='rgba(255, 45, 45, 1'/>
      </ Court>
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
  },
  playerInput: {
    backgroundColor: 'black',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white'
  },
  test: {
    display: 'flex',
    width: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top:10,
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 20
    }

});
