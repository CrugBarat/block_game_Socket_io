<img src="https://github.com/CrugBarat/my_files/blob/master/block_game/block1.png" width="300"> <img src="https://github.com/CrugBarat/my_files/blob/master/block_game/block2.png" width="300">


# Block Game

A server based 2D block game built using:

**Programming Language**: JavaScript

**Front-end Web Framework**: Vue

**Back-end Web Framework**: Express

**JS library**: Socket.io

**Markup/Styling**: HTML5/CSS3

A very VERY basic game grid that uses socket.io for bi-directional communication between server and client. Player position is stored server side. When the player moves the block, the client sends requests to the server, the server changes the position before sending the data back to the client in real time via socket.io. This allows the server to update multiple clients simultaneously.

In the screenshot above, both clients are updated when one client moves the block.

---

# Setup

- Download/Clone files

- If required, download and install [Node](https://nodejs.org/en/)

- In each of the client and server directories, in Terminal:

```
npm install
```

- In client directory, in Terminal:

```
npm run serve
```

- In server directory, in Terminal:

```
npm run server:dev
```

- Click the link below to open project in browser

[LocalHost](http://localhost:8080/): http://localhost:8080/

---

# Acknowledgements

Thanks to N. Raboy
