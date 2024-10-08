import { View, Text } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';
import colors from '../assets/colors';

const CareerPath = () => {
  return (
    <View>
      <Text>CareerPath</Text>

      <Picker
        // selectedValue={this.state.language}
        selectedValue="USD"
        
        style={{ height: 30, width: 300, justifyContent: 'center', backgroundColor:colors.lightblue }}
        itemStyle={{ height: 30, fontFamily: 'Roboto_thin' }}
      // onValueChange={(itemValue, itemIndex) =>
      //   this.setState({ language: itemValue })
      // }
      >
        <Picker.Item label="USD" value="java" />
        <Picker.Item label="ETB" value="js" />
      </Picker>
    </View>

    
  )
}

export default CareerPath