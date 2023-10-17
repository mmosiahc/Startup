# LoveBox

## Description deliverable

### Elevator pitch

Have you ever wanted to leave a love note for that special someone but forgot or been too busy? The LoveBox application allows you to send a love note to your sweetheart at any time. When a message is sent to your companion's LoveBox the heart on the box spins, and keeps your significan other's heart spinning in anticipation. You'll be able to document your chain of love notes so they're never lost. A spontaneous gift to your love will never be missed again.

### Design

LoveBox login page.

![Screenshot of the LoveBox login page](https://github.com/mmosiahc/Startup/blob/main/LoveBoxLogin.png) 
![Screenshot of the LoveBox home page](https://github.com/mmosiahc/Startup/blob/main/loveBoxHome.png)

LoveBox home page.


Sequence diagram demonstrating interaction with LoveBox.

![Image of sequence diagram](https://github.com/mmosiahc/Startup/blob/main/loveBoxSequenceDiagram.png)

### Key features
- Secure login over HTTPS
- Ability to send message
- Ability to read messages
- Ability to view message history
- messages are presistently stored

### Technologies

I will use the required technologies in teh following ways.

- HTML - Use 5 HTML pages: login, home, send, open, and story.
- CSS - Application styling for short animation indicating message in inbox. Dynamic sizing, use good whitespace, and clean color and design.
- JavaScript - I will use JavaScript to perform the login function, add animations to sending and recieving mail, and backend endpoint calls.
- Service - Backen service with endpoints for;
    - login
    - sending messages
    - receiving messages
    - receiving message history
- DB - Store users, messages, and message chains in database
- Login - Register and login users. Credentials securely stored in database. Can't send messages unless authenticated.
- WebSocket - When a user gets a message it is broadcast to them
- React - Application ported to tuse the React web framework.

<!-- ## HTML deliverable

For this deliverable I will build the basic structure using HTML.

- HTML pages - Five HTML pages to represent the login, home, send, open, and story pages
- Links - The login page will link to the home page. From the home page there will be links to the send, open, and story pages. There will be three links back to the home page
- Text - Each message and link to other pages will be text
- Images - Details on the multiple pages will be represented by images -->

