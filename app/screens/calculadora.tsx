import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';


interface HistoryEntry {
  id: string;
  bill: string;
  percentage: number;
  tip: string;
  total: string;
}

const Appcalculadora = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15);
  const [useCustomTip, setUseCustomTip] = useState(false);
  const [tipAmount, setTipAmount] = useState('0.00');
  const [totalAmount, setTotalAmount] = useState('0.00');
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    calculateTip();
  }, [billAmount, tipPercentage]);

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    if (isNaN(bill) || bill <= 0) {
      setTipAmount('0.00');
      setTotalAmount('0.00');
      return;
    }

    const tip = bill * (tipPercentage / 100);
    const total = bill + tip;

    setTipAmount(tip.toFixed(2));
    setTotalAmount(total.toFixed(2));

    // Agregar al historial
    const newEntry: HistoryEntry = {
      id: Date.now().toString(),
      bill: bill.toFixed(2),
      percentage: tipPercentage,
      tip: tip.toFixed(2),
      total: total.toFixed(2),
    };
    setHistory((prev) => [newEntry, ...prev]); 
  };

  const handlePredefinedTip = (percentage: number) => {
    setUseCustomTip(false);
    setTipPercentage(percentage);
  };

  const handleCustomTip = (text: string) => {
    const percentage = parseFloat(text) || 0;
    setUseCustomTip(true);
    setTipPercentage(percentage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Propinas</Text>

      <TextInput
        style={styles.input}
        placeholder="Monto del consumo"
        keyboardType="numeric"
        value={billAmount}
        onChangeText={setBillAmount}
      />

      <View style={styles.tipButtons}>
        {[10, 15, 20].map((percent) => (
          <Button
            key={percent}
            title={`${percent}%`}
            onPress={() => handlePredefinedTip(percent)}
            color={!useCustomTip && tipPercentage === percent ? '#2196F3' : '#ccc'}
          />
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="% Personalizado"
        keyboardType="numeric"
        value={useCustomTip ? tipPercentage.toString() : ''}
        onChangeText={handleCustomTip}
      />

      <View style={styles.results}>
        <Text style={styles.resultText}>Propina: ${tipAmount}</Text>
        <Text style={styles.resultText}>Total: ${totalAmount}</Text>
      </View>

      <Text style={styles.subtitle}>Historial:</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text>Consumo: ${item.bill}</Text>
            <Text>Propina: {item.percentage}%</Text>
            <Text>Monto propina: ${item.tip}</Text>
            <Text>Total pagado: ${item.total}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  tipButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  results: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  historyItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 1,
  },
});

export default Appcalculadora;
