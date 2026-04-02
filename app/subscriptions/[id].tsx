import { Link, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const subscrictionDetails = () => {
    const {id} =useLocalSearchParams<{id:string}>()
  return (
    <View>
      <Text>Subscription Details :{id} </Text>
      <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 rounded">
        Go back
      </Link>

    </View>
  )
}

export default subscrictionDetails
