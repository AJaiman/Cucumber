import { FontAwesome5 } from '@expo/vector-icons';
import { GestureResponderEvent, Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";
import { ThemedText } from './ThemedText';
import { FontAwesome } from '@expo/vector-icons';

export type ButtonProps = {
    isSelected: boolean,
    label: string
    style?: StyleProp<ViewStyle>
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined
}

export default function Button(props: ButtonProps) {
    return (
        <Pressable onPress={props.onPress}>
            <View style={[props.isSelected ? styles.buttonPropsSelected : styles.buttonProps, props.style]}>
                {props.label === 'Doubles' ?
                <FontAwesome5 style={{marginRight: 10}} name="user-friends" size={24} color={props.isSelected ? "black" : "#AADB1E"} /> :
                <FontAwesome style={{marginRight: 10}} name="user" size={24} color={props.isSelected ? "black" : "#AADB1E"} />
                }
                
                <ThemedText type='subtitle' style={{marginLeft: 10, color: (props.isSelected ? "black" : "#AADB1E")}}>{props.label}</ThemedText>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonProps: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 160,
        padding: 10,
        borderWidth: 2,
        borderColor: '#AADB1E',
        borderRadius: 10,
    },
    buttonPropsSelected: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 160,
        padding: 10,
        borderWidth: 2,
        borderColor: '#AADB1E',
        borderRadius: 10,
        backgroundColor: '#AADB1E'
    }
})