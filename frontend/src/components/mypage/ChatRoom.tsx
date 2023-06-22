import { JsxElement } from "typescript";


const ChatRoom = () => {

    // Create a WebSocket connection
    var socket = new WebSocket("ws://92.168.225.41:8080/ws");
    // Event handler for when the WebSocket connection is established
    socket.onopen = function(event) {
        console.log("WebSocket connection established");
    };
    // Event handler for incoming WebSocket messages
    socket.onmessage = function(event) {
        // Print the received message
        console.log("Received message: " + event.data);
    };
    // Event handler for errors in WebSocket connection
    socket.onerror = function(event:any) {
        console.error("WebSocket error: " + event.data);
    };
    // Function to send a message to the server
    function sendMessage() {
        var message = document.getElementById("messageInput") as HTMLInputElement|any;
        // Send the message to the server
        socket.send(message?.value);
        // Clear the input field
        var inputMessage : HTMLInputElement|any = document.getElementById("messageInput");
        inputMessage.value = "";
    }

    return(
        <div onClick={sendMessage}>
            chatRoom Test
        </div>
    )
}

export default ChatRoom;
