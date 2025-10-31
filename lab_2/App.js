import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.paragraph}>Name: Carl Lowell Dela Peña </Text>
        <Text style={styles.paragraph}>Age: 21 yrs.old </Text>
        <Text style={styles.paragraph}>Course/Year/Section: BSCS 3-3</Text>
        <Text style={styles.paragraph}>About Me: So Far So Good</Text>
        <Text style={styles.paragraph}>Skills: Gaming</Text>
      </View>
      <Card style={styles.card}>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#90EE90',
    padding: 8,
  },
  paragraph: {
    margin: 2,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#198450',

  },
  textBox: {
    backgroundColor: '#E5F6DF',
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#198450',
  },
  card: {
    backgroundColor: 'transparent',
    elevation: 0,
  }
});
