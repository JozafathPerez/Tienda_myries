import * as React from "react";
import { View, Text, TextInput, TouchableOpacity, useWindowDimensions, Platform } from "react-native";
import { styled } from "nativewind";
import { Accounts } from '../Objects/Accounts';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { AdminContext } from '../Objects/AdminContext';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function Account() {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === "web";
  const inputWidth = isWeb ? width / 3 : '100%';

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(true);

  const navigation = useNavigation();
  const { setIsAdmin } = React.useContext(AdminContext);

  const handleLogin = () => {
    const user = Accounts.find(account => account.email === email && account.password === password);
    if (user) {
      Toast.show({ type: 'success', text1: 'Inicio de sesión exitoso' });
      if (user.role === 'admin') {
        setIsAdmin(true);
        navigation.navigate('Administración');
      } else {
        setIsAdmin(false);
        navigation.navigate('Inicio');
      }
    } else {
      Toast.show({ type: 'error', text1: 'Error de inicio de sesión', text2: 'Correo electrónico o contraseña incorrectos' });
    }
  };

  const handleRegister = () => {
    const newUser = {
      id: Accounts.length + 1,
      firstName,
      lastName,
      phone,
      birthDate,
      address,
      email,
      password,
      role: "user"
    };

    Accounts.push(newUser);
    Toast.show({ type: 'success', text1: 'Registro exitoso', text2: 'Usuario registrado correctamente' });

    // Limpiar los campos de entrada
    setFirstName("");
    setLastName("");
    setPhone("");
    setBirthDate("");
    setAddress("");
    setEmail("");
    setPassword("");
    setIsLogin(true);
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
            value={firstName}
            onChangeText={setFirstName}
            style={{ width: inputWidth }}
          />
          <StyledTextInput
            className="h-10 border border-gray-300 rounded px-3 mb-3"
            placeholder="Apellido"
            value={lastName}
            onChangeText={setLastName}
            style={{ width: inputWidth }}
          />
          <StyledTextInput
            className="h-10 border border-gray-300 rounded px-3 mb-3"
            placeholder="Teléfono"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            style={{ width: inputWidth }}
          />
          <StyledTextInput
            className="h-10 border border-gray-300 rounded px-3 mb-3"
            placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
            value={birthDate}
            onChangeText={setBirthDate}
            keyboardType="numbers-and-punctuation"
            style={{ width: inputWidth }}
          />
          <StyledTextInput
            className="h-10 border border-gray-300 rounded px-3 mb-3"
            placeholder="Dirección"
            value={address}
            onChangeText={setAddress}
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
