import axios from "axios";
import React from "react";


export const HandlePanicPress = async (emailOrUsername) => {
    try {
        const data = {
            "username": emailOrUsername
        }
        const response = await axios.post('http://192.168.18.191:5005/api/statusChange', data)
        console.log('response', response.data)
    } catch (error) {
        console.error('Error', error)
    }
}