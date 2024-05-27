import React, { useState } from 'react';
import { TextInput, View, Button, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);

const SearchBar = ({ onSearch, onClose }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <StyledView className="flex-row items-center mr-5">
      <StyledTextInput
        className="flex-2 h-10 border border-gray-400 px-8 mr-2"
        placeholder="Buscar..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <StyledButton title="Buscar" onPress={handleSearch} />
      <TouchableOpacity onPress={onClose} className="ml-2">
        <Ionicons name="close-outline" size={30} color="black" />
      </TouchableOpacity>
    </StyledView>
  );
};

export default SearchBar;
