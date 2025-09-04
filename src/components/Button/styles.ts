import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "space-around",
        paddingTop: 20,
        paddingBottom: 20
    }, 
    botao: {
        width: "20%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    botaoText: {
        fontSize: 17,
        color: "#fff",
        fontWeight: "bold",
    }
});