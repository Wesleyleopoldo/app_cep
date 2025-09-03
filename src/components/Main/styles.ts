import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        height: "100%",
    },
    subContainer: {
        height: "100%",
        display: "flex",
        paddingBottom: 370,
    },

    textoContainer: {
        paddingTop: 30,
    },

    texto: {
        textAlign: "center",
        fontSize: 40,
        marginTop: 23,
        marginBottom: 20,
        fontWeight: "bold",
    },
    input: {
        width: 300,
        height: 60,
        borderRadius: 8,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#ddd",
        borderColor: "#ddd",
        paddingHorizontal: 20,
        fontSize: 25,
    }
});