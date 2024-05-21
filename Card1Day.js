import * as React from 'react';
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Card1Day = () => {
  const [amount, setAmount] = React.useState('');
  const [item, setItem] = React.useState('');

  return (
    <Card style={styles.card}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
      <Card.Content>
        <Text variant="titleLarge">Card title</Text>
        <Text variant="bodyMedium">Card content</Text>
        <TextInput
          label="Enter Amount"
          value={amount}
          onChangeText={text => setAmount(text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          label="Enter Item"
          value={item}
          onChangeText={text => setItem(text)}
          style={styles.input}
        />
      </Card.Content>
      {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
      <Card.Actions>
        <Button onPress={() => { /* Handle cancel action */ }}>Cancel</Button>
        <Button onPress={() => { /* Handle ok action */ }}>Ok</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Card1Day;