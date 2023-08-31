import { StyleSheet, View } from "react-native";
import Icons from '@expo/vector-icons/FontAwesome5';
import Searchbar from '../Searchbar/Searchbar';

export default function Header() {
    return <>
        <View style={styles.header}>
            <Icons name='align-justify' size={30} color='#f1f1f1' style={styles.shadow} />
            <View style={{marginRight: 10, marginLeft: 10}}>
                <Searchbar />
            </View>
            <Icons name='shopping-cart' size={30} color='#f1f1f1' style={styles.shadow} />
        </View>
    </>;
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: '#F07A32',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 27,
        fontWeight: '700',
        color: '#f1f1f1',
        textShadowColor: 'rgba(0, 0, 0, .3)',
        textShadowOffset: {
            width: 0,
            height: 0,
        },
        textShadowRadius: 10,
    },
    shadow: {
        textShadowColor: 'rgba(0, 0, 0, .6)',
        textShadowOffset: {
            width: 0,
            height: 0,
        },
        textShadowRadius: 5,
    },
});