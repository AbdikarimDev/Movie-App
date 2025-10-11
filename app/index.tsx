import { View, Text } from 'react-native'
import React from 'react'
import { Link } from '@/.expo/types/router'

const index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold">index</Text>
      <Link className="text-blue-500 underline" href="/onboarding" ><Text>Go to onboarding</Text></Link>
    </View>
  )
}

export default index