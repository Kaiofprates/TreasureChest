import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgba(12, 249, 222, 0.2)",
        width: 300,
        borderRadius: 5
    },
    title: {
        color: "white",
        fontSize: 18
    },
    input: {
        marginBottom: 14,
        color: "#618CB5"
    },
    icon: {
        marginRight: 8
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    login: {
        width: 96
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#171738",
    }
});

module.exports = styles;