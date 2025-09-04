import { useState } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { s } from "./styles";

type ButtonProps = {
    onPressClear: () => void;
    onPressFind: () =>  void;
}

export default function Button({ onPressClear, onPressFind }: ButtonProps) {

    return (
        <View style={s.container}>
            <TouchableOpacity style={[s.botao, { backgroundColor: "#175681" }]} onPress={onPressFind}>
                <Text style={s.botaoText}>Buscar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[s.botao, { backgroundColor: "#ff0000" }]} onPress={onPressClear}>
                <Text style={s.botaoText}>Limpar</Text>
            </TouchableOpacity>
        </View>
    )
}