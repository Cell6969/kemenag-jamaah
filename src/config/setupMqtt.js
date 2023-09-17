import Paho, { Client } from "paho-mqtt";
import { MQTT_BROKER, MQTT_USERNAME, MQTT_PASSWORD } from "@env";

class MqttClient {
  constructor({ clientId }) {
    this.clientId = clientId;
    this.client = new Client(MQTT_BROKER, Number(8083), this.clientId);
  }

  connect() {
    this.client.connect({
      onSuccess: () => this.onConnect(),
      onFailure: (response) => this.onConnectFailure(response),
      userName: MQTT_USERNAME,
      password: MQTT_PASSWORD,
    });
    this.client.onConnectionLost = (e) => this.onConnectionLost(e);
    this.client.onMessageArrived = (message) => this.onMessageArrived(message);
  }

  onConnect() {
    console.log('Connected to Broker');
    this.client.subscribe('geo');
  }

  onConnectFailure(response) {
    console.log("Failed to connect broker", response.errorMessage);
  }

  onConnectionLost(response) {
    console.log("Connection lost:", response.errorMessage);
  }

  onMessageArrived(message) {
    console.log("Message arrived:", message.payloadString);
  }

  sendLocation(latitude, longitude) {
    if (this.client.isConnected()) {
      const locationMessage = new Paho.Message(
        JSON.stringify({ client_id: this.clientId, latitude, longitude })
      );
      locationMessage.destinationName = 'geo';
      this.client.send(locationMessage);
    } else {
      console.log('Not sent to Broker');
    }
  }

  disconnect() {
    this.client.unsubscribe('geo');
    this.client.disconnect();
  }
}

export default MqttClient;
