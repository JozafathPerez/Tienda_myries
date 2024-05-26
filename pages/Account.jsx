import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function Account() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    console.log("Inicio de sesión:", email, password);
  };

  const handleRegister = () => {
    console.log("Registro:", email, password);
  };

  return (
    <StyledView className="flex-1 justify-center items-center p-5">
      <StyledText className="text-2xl mb-5">Inicio de Sesión</StyledText>
      <StyledTextInput
        className="w-full h-10 border border-gray-300 rounded px-3 mb-3"
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <StyledTextInput
        className="w-full h-10 border border-gray-300 rounded px-3 mb-3"
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <StyledTouchableOpacity
        className="bg-blue-500 py-2 px-4 rounded w-full mb-3"
        onPress={handleLogin}
      >
        <StyledText className="text-white text-center">Iniciar Sesión</StyledText>
      </StyledTouchableOpacity>
      <StyledTouchableOpacity
        className="bg-green-500 py-2 px-4 rounded w-full"
        onPress={handleRegister}
      >
        <StyledText className="text-white text-center">Registrarse</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
}
