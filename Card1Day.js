//Card1Day.js
import * as React from 'react';
import { Avatar, Button, Card, Text, TextInput, List } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />




const Card1Day = () => {

  const [expanded, setExpanded] = React.useState(true);//for list
  const handlePress = () => setExpanded(!expanded);//for list
  const [checked, setChecked] = React.useState(false);//checkbox
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
          label="Enter Describe"
          value={item}
          onChangeText={text => setItem(text)}
          style={styles.input}
        />
        {/* list */}
        <List.Section title="Accordions">
          <List.Accordion
            title="Cost Class"
            left={props => <List.Icon {...props} icon="folder" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
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

// const styles = StyleSheet.create({
//   card: {
//     flex: 1, // Make sure the card fills its container
//     backgroundColor: '#f0f0f0', // Example background color
//     padding: 10, // Example padding
//     borderRadius: 10, // Example border radius
//     // Add other styles as needed
//   },
// });
export default Card1Day;