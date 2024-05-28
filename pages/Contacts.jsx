import React from 'react';
import { View, Text, ScrollView, useWindowDimensions, Platform  } from 'react-native'; 
import WebView from 'react-native-webview';

const Contacts = () => {
  const windowWidth = useWindowDimensions().width;
  const isWeb = Platform.OS === 'web';

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: isWeb ? windowWidth * 0.1 : 20 }}>
        <Text style={{ fontSize: isWeb ? 18 : 20, fontWeight: 'bold', marginBottom: 10 }}>
          Contactenos
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Somos Myries Suplidora de Barberia Myrie's Suplidora de Barberia
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Somos Una Empresa Distribuidora Enfocada En los Especialistas de Belleza (Barberos y Lady Barber) de Costa Rica.
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Ofrecemos Servicio Continuo y Actualización de Productos para hacer Crecer Tu negocio.
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Escríbanos al Whatsapp para coordinar una Visita 86083983 / 87211066
        </Text>
      </View>
      <WebView
        source={{ uri: 'https://www.facebook.com/p/Myries-Suplidora-de-Barberia-100064126293389/' }}
        style={{ flex: 1, height: isWeb ? 400 : 590, width: '95%', marginHorizontal: '2%' }} 
      />
    </ScrollView>
  );
}

export default Contacts;
