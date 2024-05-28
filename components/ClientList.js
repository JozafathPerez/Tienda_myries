import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Accounts from '../Objects/Accounts'

const ClientInfo = ({ client }) => {
    return (
      <View style={styles.clientContainer}>
        <Text style={styles.clientName}>{`${client.firstName} ${client.lastName}`}</Text>
        <Text>Email: {client.email}</Text>
        <Text>Phone: {client.phone}</Text>
        <Text>Birth Date: {client.birthDate}</Text>
        <Text>Address: {client.address}</Text>
        <Text>Role: {client.role}</Text>
      </View>
    );
  };
  
  const ClientList = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={Accounts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ClientInfo client={item} />}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    clientContainer: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    clientName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
  });
  
  export default ClientList;