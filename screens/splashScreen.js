import { Image, StyleSheet, View } from "react-native";
import Icon from "../assets/speducatelogo1.png"

export default function SplashScreen(){
    return (
        <View style={styles.container}>
            <View>
                <Image source={Icon} style={styles.image} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#1B0F18',
    },
    image: {
        width: 370, 
        height: 1000, 
        resizeMode: "cover",
    }
})