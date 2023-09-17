import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";


const Guide = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#f6f6f6'}}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Judul</Text>
                    <Text style={styles.subtitle}>Sub Judul</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical:30,
        paddingHorizontal: 15,
    },
    header: {
        paddingHorizontal: 24,
        marginBottom: 12
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292'
    }

})

export default Guide;