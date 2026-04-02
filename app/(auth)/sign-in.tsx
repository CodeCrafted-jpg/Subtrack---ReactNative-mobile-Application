import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const signIn = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
    <Link href="/(auth)/sign-up" className="mt-4 px-4 py-2 bg-blue-500 rounded">
      Create an account
    </Link>
    </View>
  )
}

export default signIn  
