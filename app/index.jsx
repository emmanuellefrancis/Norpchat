import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={styles.container}>
            <Text style={styles.title}>janber alisoso</Text>
            <Text style={styles.subtitle}>This is the first page of your app.</Text>
            <Link href="/profile">go to profile</Link>
            <Link href="/bookmark">go to bookmark</Link>

            <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
