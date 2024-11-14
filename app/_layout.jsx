import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Mainlayout = () => {
    return (
        <Stack>
            <Stack.screen
                name="index"
                options={{headershown:false}} 
            
            />
        </Stack>        
    )
}

export default Mainlayout