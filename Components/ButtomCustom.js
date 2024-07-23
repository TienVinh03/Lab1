// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonCustom = ({ onPress, title, backgroundColor, textColor }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: backgroundColor || '#2196F3' }]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, { color: textColor || '#fff' }]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ButtonCustom;