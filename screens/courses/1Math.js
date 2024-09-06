// screens/kMath.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function KMath() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Kindergarten Math Content</Text>
            <TouchableOpacity style={styles.button} onPress={navigation.navigate("quizscreen")}>
                <Text style={styles.buttonText}>Take The Sigma QUiz SKibdifi</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
