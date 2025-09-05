import { useRef, useState } from "react";
import { Text, View, TouchableOpacity, SafeAreaView, TextInput, Keyboard } from "react-native";
import { s } from "./styles"
import Button from "../Button";
import api from "../../services/api";

export default function Main() {
    const [ cep, setCep ] = useState("");
    const inputRef = useRef<TextInput>(null);
    const [cepUser, setCepUser] = useState<any>(null);

    function limpar() {
        setCep("");
        inputRef.current?.focus();
        setCepUser(null);
    }

    async function buscar() {
        if(cep == "") {
            alert("Digite o CEP!!");
            setCep("");
            return;
        }

        try {
            const response = await api.get(`/ws/${cep}/json/`);
            console.log(response.data);
            setCep("");
            setCepUser(response.data);
            Keyboard.dismiss();
        } catch(error) {
            console.error(error);
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

            { cepUser &&
                <View style={s.dadosContainer}>
                    <Text style={s.dados}>Cep: {cepUser.cep}</Text>
                    <Text style={s.dados}>Logradouro: {cepUser.logradouro}</Text>
                    <Text style={s.dados}>Bairro: {cepUser.bairro}</Text>
                    <Text style={s.dados}>Cidade: {cepUser.localidade}</Text>
                    <Text style={s.dados}>Estado: {cepUser.uf}</Text>
                </View>
            }

        </SafeAreaView>
    )
}
