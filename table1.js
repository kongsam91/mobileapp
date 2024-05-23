//table1.js
import React from 'react';
import { StyleSheet, View, ScrollView,Alert } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';


const Table1 = () => {
  const [tableHead] = React.useState(['Date', 'Class', 'Cost', 'Detail']);
  const [card, setCard] = React.useState([]);
  const [tableData, setTableData] = React.useState([]);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (isFocused) {
      getCaseFromUserDevice();
    }
  }, [isFocused]);


  //載入頁面時 得到所有資料
  const getCaseFromUserDevice = async () => {
    try {
      const newCase = await AsyncStorage.getItem('newCase');
      if (newCase != null) {
        //setCard(JSON.parse(newCase));
        const parsedData = JSON.parse(newCase);
        const formattedData = parsedData.map(item => [item.date, item.kind, item.cost, item.item]);
        setTableData(formattedData);
        console.log("TABLE PAGE GET :" + formattedData);
      } else {
        setTableData([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const deleteCase = (todoId) => {
  //   const newCaseItem = card.filter(item => item.id != todoId);
  //   setCard(newCaseItem);
  // };

  //刪除所有資料
    const clearAllCase = async () => {
      Alert.alert('Confirm', 'Clear all data?', [
        {
          text: 'Yes',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('newCase');
              getCaseFromUserDevice(); // Refresh the table data after clearing
              console.log("test: " + (await AsyncStorage.getItem('newCase'))); // Should be null
            } catch (error) {
              console.log(error);
            }
          },
        },
        {
          text: 'No',
        },
      ]);
    };


  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table style={styles.Table} >
            <Row data={tableHead} widthArr={[85, 85, 85, 85]} style={styles.header} textStyle={styles.headerText} />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table style = {{marginBottom: 30}} borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9',}}>
              {
                tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={[85, 85, 85, 85]}
                    style={{ ...styles.row, ...(index % 2 && { backgroundColor: '#F7F6E7' }) }}
                    textStyle={styles.text}
                  />
                ))
              }
            </Table>
            <Button style={styles.Button} onPress={() => clearAllCase()}>
              Delete All Table
            </Button>
          </ScrollView>
          
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    backgroundColor: '#275dad',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '100',
    color:'#FCF7F8', //
    fontWeight :'bold',
  },

  text: {
    textAlign: 'center',
    fontWeight: '100',
    color:'#5B616A', //
    fontWeight :'bold',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: '#E7E6E1',
  },
  Button: {
    backgroundColor: 'beige',
  },
  Table: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ABA9C3', //
  },
});

export default Table1;