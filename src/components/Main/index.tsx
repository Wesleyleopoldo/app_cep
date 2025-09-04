import { useRef, useState } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { s } from "./styles"
import Button from "../Button";

export default function Main() {
    const [ cep, setCep ] = useState("");
    const inputRef = useRef<TextInput>(null);

    function limpar() {
        setCep("");
        inputRef.current?.focus();
    }

    async function buscar() {
        if(cep == "") {
            alert("Digite o CEP!!");
            setCep("");
            return;
        }
    }

    return (
        <SafeAreaView style={s.container}>
            <View style={s.textoContainer}>
                <Text style={s.texto}>Digite o CEP desejado</Text>
            </View>

            <View style={s.subContainer}>

                <TextInput
                    style={s.input}
                    textContentType="postalCode"
                    placeholder="ex: 00000000"
                    value={cep}
                    onChangeText={(texto) => setCep(texto)}
                    keyboardAppearance="dark"
                    keyboardType="numeric"
                    ref={inputRef}
                />
            <Button onPressFind={() => buscar()} onPressClear={() => limpar()}/>
            </View>

        </SafeAreaView>
    )
}