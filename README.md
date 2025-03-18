#  Micro Chat with WebRTC

This is a tiny chatting program using WebRTC.

1. Create Data Channel  
(In this example, The channel name is 'data'.)

2. Negotiating with other peers using Signal Server  
(Node.js and 'ws' module is needed to run Signal Server.)

3. Send a message and have a fun!  
(To send a message in console, use "dc.send('YOUR MESSAGE HERE')".)

## How to run

1. Download Files in this repository.

2. Install node.js.  
[Link to get Node.js](https://nodejs.org/)

3. Run cmd or terminal.

4. Change the path.  
(It's the path "package.json" located.)

5. Type "npm install".

6. Type "npm start"  
(It's equal to typing "node src/server.js" in command line.)

7. Run HTTP Server
  
    1. Python3  
    ```python3 -m http.server 5500```
  
    2. Live Server Extension of VS Code  
    [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  
    3. And So On...

8. Open "client.html"  
(e.g., http://localhost:5500/client.html)
