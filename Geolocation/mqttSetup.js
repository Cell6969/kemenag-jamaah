import Paho, { Client } from "paho-mqtt";
import {MQTT_BROKER, MQTT_USERNAME, MQTT_PASSWORD} from "@env";

class MqttClient {
    constructor ({clientId}) {
        this.brokerUrl = brokerUrl;
        this.clientId = clientId;
        this.client = new Client(MQTT_BROKER, Number(8083), this.clientId);
        this.client.onConnectionLost = this.onConnectionLost.bind(this);
        this.client.onMessageArrived = this.onMessageArrived.bind(this);
    }

    connect () {
        this.client.connect({
            onSuccess: this.onConnect.bind(this),
            onFailure: this.onConnect.bind(this),
            userName: MQTT_USERNAME,
            password: MQTT_PASSWORD
        })
    };

    onConnect () {
        console.log('Connect to Broker');
        this.client.subscribe('geo');
    }

    onConnectFailure (respons) {
        console.log("Failed to connect broker", respons.errorMessage)
    };

    sendLocation(latitude,longitude) {
        if (this.client.isConnected()){
            const locationMessage = new Paho.Message(
                JSON.stringify({client_id: this.clientId, latitude, longitude})
            );
            locationMessage.destinationName = 'geo';
            this.client.send(locationMessage);
        } else {
            console.log('Not Send it to Broker');
        }
    };

    disconnect() {
        this.client.unsubscribe('geo');
        this.client.disconnect();
    }
};


export default MqttClient;