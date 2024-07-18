import { ReactNode } from "react"
import { StyleSheet, View } from "react-native"

type HalfCourtProps = {
    color: string 
}

function HalfCourt(props: HalfCourtProps) {
    return (
        <View style={[styles.halfCourtContainer, {backgroundColor: props.color}]}>
            <View  style={[styles.topHalfCourt, props.color === 'rgba(255, 45, 45, 0.5)' ? {borderRightWidth: 2} : {borderLeftWidth: 2}]}/>
            <View  style={[styles.bottomHalfCourt, props.color === 'rgba(255, 45, 45, 0.5)' ? {borderRightWidth: 2} : {borderLeftWidth: 2}]}/>
        </View>
    )
}

type CourtProps = {
    children: ReactNode
}

export default function Court(props: CourtProps) {
    return (
        <View style={styles.absoluteContainer}>
            <View style={styles.courtContainer}>
                <HalfCourt color='rgba(255, 45, 45, 0.5)' />
                <View style={styles.redKitchen}/>
                <View style={styles.blueKitchen}/>
                <HalfCourt color='rgba(27, 148, 213, 0.5)' />
            </View>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    courtContainer: {
        borderWidth: 2,
        borderColor: 'white',
        width:344,
        display: 'flex',
        flexDirection: 'row'
    },
    halfCourtContainer: {
        height: 200,
        width: 130
    },
    topHalfCourt: {
        height: 100,
        borderBottomWidth: 2,
        borderColor: 'white',
    },
    bottomHalfCourt: {
        height: 100,
        borderColor: 'white'
    },
    redKitchen: {
        width: 40,
        backgroundColor: 'rgba(255, 45, 45, 0.5)',
        borderRightWidth: 2,
        borderColor: 'white'
    },
    blueKitchen: {
        width: 40,
        backgroundColor: 'rgba(27, 148, 213, 0.5)',
        borderLeftWidth: 2,
        borderColor: 'white'
    },
    absoluteContainer: {
        position: 'relative'
    }
})