import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
const Row = (props) => (
  <TouchableOpacity
    style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}
    onPress={() => {
      // debugger;
      props.onSelectContact(props)
    }}
  >
    <View style={{ alignItems: 'flex-start' }}>
      {/* {console.error(props)} */}
      <Text >{props.name}</Text>
      <Text>{props.phone}</Text>
    </View>
    <View style={{ alignItems: 'flex-end' }}>
      <Button title="Remove" color='red' ></Button>
    </View>
  </TouchableOpacity>
)

export default Row