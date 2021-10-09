import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { io } from 'socket.io-client'

export default function ChatRoom ({ msgAlert, user }) {
  // set state for message
  const [currentMessage, setCurrentMessage] = useState('')

  // sets socket var
  const socket = useRef(io('ws://localhost:4741'))
  // allows to use room and name from url
  const { room, name } = useParams()

  useEffect(() => {
    socket.current.emit('addUser', user._id)
    socket.current.on('getUsers', users => {
      console.log('users', users)
    })
  }, [user])

  // Sends message with socket
  const sendMessage = async () => {
    if (currentMessage !== '') {
      console.log('username', name)
      const messageData = {
        room: room,
        userName: name,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes()
      }
      await socket.emit('message', messageData)
      setCurrentMessage('')
    }
  }

  return (
    <div>
      <div className="chat-container">
        <header className="chat-header">
          <h1><i className="fas fa-smile"></i> Chit-Chat</h1>
          <a id="leave-btn" className="btn">Leave Room</a>
        </header>
        <main className="chat-main">
          <div className="chat-sidebar">
            <h3><i className="fas fa-comments"></i> Room Name:</h3>
            <h2 id="room-name">{room}</h2>
            <h3><i className="fas fa-users"></i> Users</h3>
            <ul id="users">user1</ul>
          </div>
          <div className="chat-messages"></div>
        </main>
        <div className="chat-form-container">
          <form id="chat-form" onClick={sendMessage}>
            <input
              id="msg"
              type="text"
              value={currentMessage}
              placeholder="Enter Message"
              required
              onChange={(event) => {
                setCurrentMessage(event.target.value)
              }}
            />
            <button className="btn"><i className="fas fa-paper-plane"></i> Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
