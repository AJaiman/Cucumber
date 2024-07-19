import Button from '@/components/Button';
import Court from '@/components/Court';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, ViewStyle, StyleProp, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';

type PlayerCardProps = {
  color: string
  playerNumber: string
  style?: StyleProp<ViewStyle>
}

function PlayerCard(props: PlayerCardProps) {

  const [player, onChangePlayer] = useState('')

  if (props.color === 'rgba(255, 45, 45, 1)') {
    return (
      <GestureHandlerRootView style={[styles.playerCardContainer, props.style, {backgroundColor: props.color, borderColor: props.color}]}>
        <FontAwesome name="user" size={24} color='black' style={{margin: 8}} />
        <TextInput 
          style={styles.playerInput}
          placeholder={'Player ' + props.playerNumber}
          onChangeText={onChangePlayer}
          value={player}
        />
      </GestureHandlerRootView>
    )
  }
  else {
    return (
      <GestureHandlerRootView style={[styles.playerCardContainer, props.style, {backgroundColor: props.color, borderColor: props.color}]}>
        <TextInput 
          style={styles.playerInput}
          placeholder={'Player ' + props.playerNumber}
          onChangeText={onChangePlayer}
          value={player}
        />
        <FontAwesome name="user" size={24} color='black' style={{margin: 8}} />
      </GestureHandlerRootView>
    )
  }
  return null
}

type ScoreInputProps = {
  color: string
}

function ScoreInput(props: ScoreInputProps) {

  const [score, onScoreChange] = useState('')

  return (
    <GestureHandlerRootView>
      <TextInput 
          style={[styles.scoreInput, {backgroundColor: 'rgba(' + props.color + ', 0.5)', borderColor: 'rgba(' + props.color + ', 1)'}]}
          placeholder={'Score'}
          onChangeText={onScoreChange}
          value={score}
          textAlign='center'
          keyboardType='number-pad'
        />
    </GestureHandlerRootView>
  )
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.mainContainer}>
      <ThemedText type='title' style={{fontWeight: 900, fontSize: 40}}>Cucumber</ThemedText>
      <ThemedText type='title' style={{color: '#AADB1E', fontWeight:800, marginTop:40}}>Report Scores</ThemedText>
      <ThemedText style={{marginTop: 10}}>Game Info</ThemedText>
      <View style={{display: 'flex', flexDirection:'row', marginLeft: 20, marginVertical: 10}}>
        <ScoreInput color='255, 45, 45'/>
        <ScoreInput color='27, 148, 213'/>
      </View>
      <Court>
        {
          isSingles ? 
        (<>
        <PlayerCard playerNumber='1' color='rgba(255, 45, 45, 1)' style={{top: 75, left: 15}}/>
        <PlayerCard playerNumber='1' color='rgba(27, 148, 213, 1)' style={{top: 75, right: 30}}/>
        </>) :
        (<>
          <PlayerCard playerNumber='1' color='rgba(255, 45, 45, 1)' style={{top: 30, left: 15}}/>
          <PlayerCard playerNumber='2' color='rgba(255, 45, 45, 1)' style={{top: 120, left: 15}}/>
          <PlayerCard playerNumber='1' color='rgba(27, 148, 213, 1)' style={{top: 30, right: 30}}/>
          <PlayerCard playerNumber='2' color='rgba(27, 148, 213, 1)' style={{top: 120, right: 30}}/>
          </>)
        }
      </ Court>
      <ThemedText style={{marginTop: 20}}>Type of Game</ThemedText>
      <View style={styles.gameSelectView}>
        <Button isSelected={isSingles} onPress={onPressSingles} label='Singles' />
        <Button isSelected={!isSingles} onPress={onPressDoubles} style={{marginLeft: 20}} label='Doubles' />
      </View>
    </View>
    </TouchableWithoutFeedback>
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
    width: 100,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  playerCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderWidth: 3,
    borderRadius: 5,
  },
  scoreInput: {
    borderWidth: 3,
    height: 50,
    width: 140,
    fontSize: 20,
    color: 'white',
    borderRadius: 10,
  }

});
