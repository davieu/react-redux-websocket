import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
const nextUserId = 0;

//current user is adding message. I'm sending message
export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    Id: nextMessageId++,
    message,
    author
});

// New user can be added to chat
export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
});

//other user in chat is adding message
export const messageReceived = (message, author) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message, 
    author
});

//server will send update to the users list when a person joins or quits the chat
export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
})

//reducer takes care of creating a new state when an action is dispatched. 
//When a message is a added by us we are going to add it to the local list of messages.
//when we receive a message from the server we add it to our list of messages.
//when we add a user we put it in the users list
//when we get an updated users list from the server we refresh