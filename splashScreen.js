import { Image, StyleSheet, View } from "react-native";
import Icon from "../assets/praneelcrawling.png"

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
        backgroundColor: '#83AAF5',
    },
    image: {
        width: 100, 
        height: 100, 
        resizeMode: "cover",
    }
})