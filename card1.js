//card1.js
import * as React from 'react';
//https://callstack.github.io/react-native-paper/docs/components/Card/
import { 
  Avatar, 
  Button, 
  Card, 
  Text, 
  TextInput, 
  List,
   } from 'react-native-paper';
import { 
  View, 
  StyleSheet ,
  Checkbox,
  Alert,} from 'react-native';
  import { useIsFocused } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}



const Card1 = ( ) => {

  //list
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  //card content
  const [item, setItem] = React.useState('');
  const [cost, setCost] = React.useState('');
  const [kind, setkind] = React.useState('');
  const [selectedDate, setselectedDate] = React.useState('');
  const [card, setCard] = React.useState([]);
  
  const isFocused = useIsFocused();

  React.useEffect(() => {
    saveCaseoUserDevice(card);
  }, [card]);

  React.useEffect(() => {
    if (isFocused) {
      getCaseFromUserDevice();
    }
  }, [isFocused]);
  

  const addCase = (item,cost,kind) => {
    if(!item || !cost || !kind) {
      Alert.alert('請輸入文字');
    } else {
      const newCase = {
        id: Math.random(),
        //date: formatDate(new Date()),
        date: selectedDate,
        cost : cost,
        kind: kind,
        item: item,

      };
      setCard([...card, newCase]);
      setItem('');
      setCost('');
      setkind('');
      Alert.alert('資料新增成功');
    }
    
  }
  const getCaseFromUserDevice = async () => {
    try {
      const newCase = await AsyncStorage.getItem('newCase');
      if (newCase != null) {
        setCard(JSON.parse(newCase));
        console.log("CARD PAGE GET: " + JSON.parse(newCase));
      } else {
        setCard([]);
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const nowDate = await AsyncStorage.getItem('selectedDate');
      if (nowDate != null) {

        setselectedDate(JSON.parse(nowDate));
        console.log("Date GET: " + nowDate);
      } else {
        console.log("no date");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //save data to db
  const saveCaseoUserDevice = async (newCase) => {
    try {
      const stringifynewCase = JSON.stringify(newCase);
      await AsyncStorage.setItem('newCase', stringifynewCase);
      console.log(newCase);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style = {styles.view}>
      <Card style={styles.card}>
        <Card.Title title= {selectedDate}  left={LeftContent} titleStyle={{ color: 'beige',fontWeight :'bold',fontSize: 20 }} />
        <Card.Content>
          <TextInput
              label="Enter Class"
              value={kind}
              onChangeText={text => setkind(text)}
              style={styles.input}
          />
          <TextInput
            label="Enter Cost"
            value={cost}
            onChangeText={text => setCost(text)}
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            label="Enter Describe"
            value={item}
            onChangeText={text => setItem(text)}
            style={styles.input}            
          />
          {console.log("DEBUG CONSOLE :",item)}


          {/* list */}
          {/* <List.Section >
            
            <List.Accordion
            
              title="Cost Class"
              left={props => <List.Icon {...props} icon="folder" />}>
              <View  style = {styles.flexdir}>
                <Button>132</Button>
                <List.Item title="First item" /> 
                
              </View>
              <List.Item title="Second item" />
          </List.Accordion>


          </List.Section> */}

        </Card.Content>
        <Card.Actions>
          
        <Button style={styles.Button} onPress={() => addCase( item, cost, kind)}>Add</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}


//https://reactnative.dev/docs/height-and-width
const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 20,
    height: 150,
    backgroundColor: 'steelblue',
    
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
  },
  flexdir :{
    flexDirection: 'row',
    // flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    
  },
  view :{
    height:410,
  },
  Button :{
    backgroundColor: 'beige',
  },
  Text :{
    color: 'beige',
  },
});

export default Card1;
