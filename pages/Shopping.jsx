import * as React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Shopping() {

  return (
    <StyledView className="flex-1 justify-center items-center p-5">
      <StyledText className="text-2xl mb-5">Historial de pedidos</StyledText>
    </StyledView>
  );
}
