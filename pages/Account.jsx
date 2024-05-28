import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, useWindowDimensions, Platform } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function Account() {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === "web";
  const inputWidth = isWeb ? width / 3 : '100%'; // Ancho de los inputs para web y dispositivos móviles

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(true); // Estado para controlar la vista de inicio de sesión o registro

  const handleLogin = () => {
    console.log("Inicio de sesión:", email, password);
  };

  const handleRegister = () => {
    console.log("Registro:", email, password);
  };

  return (
    <StyledView className="flex-1 justify-center items-center p-5">
      <StyledText className="text-2xl mb-5">
        {isLogin ? "Iniciar Sesión" : "Registrarse"}
      </StyledText>
      <StyledTextInput
        className="h-10 border border-gray-300 rounded px-3 mb-3"
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ width: inputWidth }}
      />
      <StyledTextInput
        className="h-10 border border-gray-300 rounded px-3 mb-3"
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{ width: inputWidth }}
      />
      {!isLogin && (
        <>
          <StyledTextInput
            className="h-10 border border-gray-300 rounded px-3 mb-3"
            placeholder="Nombre"
            style={{ width: inputWidth }}
          />
          <StyledTextInput
            className="h-10 border border-gray-300 rounded px-3 mb-3"
            placeholder="Apellido"
            style={{ width: inputWidth }}
          />
          <StyledTextInput
            className="h-10 border border-gray-300 rounded px-3 mb-3"
            placeholder="Teléfono"
            keyboardType="phone-pad"
            style={{ width: inputWidth }}
          />
          <StyledTextInput
            className="h-10 border border-gray-300 rounded px-3 mb-3"
            placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
            keyboardType="numbers-and-punctuation"
            style={{ width: inputWidth }}
          />
          <StyledTextInput
            className="h-10 border border-gray-300 rounded px-3 mb-3"
            placeholder="Dirección"
            style={{ width: inputWidth }}
          />
        </>
      )}
      <StyledTouchableOpacity
        className={`py-2 px-4 rounded ${isLogin ? 'bg-blue-500' : 'bg-green-500'} mb-3`}
        onPress={isLogin ? handleLogin : handleRegister}
        style={{ width: inputWidth }}
      >
        <StyledText className="text-white text-center">
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </StyledText>
      </StyledTouchableOpacity>
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text className="text-blue-500 text-center">
          {isLogin ? "¿No tienes cuenta? Regístrate aquí" : "¿Ya tienes una cuenta? Inicia sesión"}
        </Text>
      </TouchableOpacity>
    </StyledView>
  );
}
