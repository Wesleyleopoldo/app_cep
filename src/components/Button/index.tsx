import { useState } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { s } from "./styles"

export default function Button() {
    const [cep, setCep] = useState("");

    return (
        <View style={s.container}>
            <TouchableOpacity style={s.botao}>
                <Text style={s.botaoText}>Buscar</Text>
            </TouchableOpacity>
        </View>
    )
}