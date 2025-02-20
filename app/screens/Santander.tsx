import React, { version } from "react";
import {  SafeAreaView,  StyleSheet, Text,  TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
export default function Santander(){
    return(
      <SafeAreaView style={styles.container}>
      {/* Sección de la tarjeta */}
        <View style={styles.Header}>
          <Text style={styles.cardTitle}>Cuentas en pesos</Text>
        </View>
      <TouchableOpacity style={styles.cardContainer}>        
        <View style={styles.cardContent}>
          <Text style={styles.cardSubtitle}>Debito líkeu</Text>
          <Text style={styles.cardDescription}>Dinero disponible en MXN</Text>
          
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>$ 3.16</Text>
            <Text style={styles.accountNumber}>CTA 25**2068</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Lista de opciones */}
      <View style={styles.menuContainer}>
        {[
          ['Prender o apagar tarjeta', '+'],
          ['Movimientos', '>'],
          ['Realizar transferencia', '+'],
          ['Realizar pago', '+'],
          ['Realizar retiro sin tarjeta', '+'],
        ].map(([title, icon], index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuText}>{title}</Text>
            <Text style={styles.menuIcon}>{icon}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de opciones inferiores */}
      <View style={styles.menuContainer}>
        {[
          ['Generación de NIP', 'Nuevo'],
          ['Billeteras digitales', 'Nuevo'],
          ['Bloqueos selectivos', '>'],
          ['Bloqueo total y reposición', '>'],
          ['Aclaraciones', '+'],
          ['Mis finanzas', '>'],
        ].map(([title, icon], index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuText}>{title}</Text>
            <Text style={[styles.menuIcon, icon === 'Nuevo' && styles.newBadge]}>
              {icon}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    Header:{
      fontSize:18,
      fontWeight:'bold',
      marginBottom:8,
    },
    cardContainer: {
      backgroundColor: '#E60012',
      borderRadius: 8,
      padding: 16,
      marginBottom: 24,
      shadowColor: '#fff',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,            
      marginVertical:20,
      marginHorizontal:60,
    },
    cardHeader: {
      borderBottomWidth: 1,
      borderBottomColor: '#fff',
      paddingBottom: 8,
      marginBottom: 12,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardContent: {
      marginBottom: 8,
    },
    cardSubtitle: {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 4,
      color:'#fff',
    },
    cardDescription: {
      fontSize: 12,
      color: '#fff',
      marginBottom: 12,
    },
    amountContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    amount: {
      fontSize: 24,
      color:'#fff',
      fontWeight: 'bold',
    },
    accountNumber: {
      fontSize: 14,
      color: '#fff',
    },
    menuContainer: {
      marginBottom: 24,
      borderTopWidth: 1,
      borderTopColor: '#e0e0e0',
    },
    menuItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    menuText: {
      fontSize: 16,
    },
    menuIcon: {
      fontSize: 16,
      color: '#E60012',
    },
    newBadge: {
      color: '#007AFF',
      fontWeight: 'bold',
    },
  });