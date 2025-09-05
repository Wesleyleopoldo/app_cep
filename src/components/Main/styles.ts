import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center"
    },
    subContainer: {
        height: 150,
        display: "flex",
        paddingBottom: 37,
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
    },

    dadosContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        width: 300,
    },
    dados: {
        fontSize: 19,
        color: "#808080"
    },
});