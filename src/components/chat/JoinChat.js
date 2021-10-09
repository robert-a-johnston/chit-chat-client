import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './JoinChat.css'

function JoinChat (props) {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  const joinRoom = (socket, name, room) => {
    if (name !== '' && room !== '') {
      const joinRoomData = {
        name: name,
        room: room
      }
      socket.emit('join_room', joinRoomData)
    }
  }
  return (
    <div>
      <div className="join-container">
        <header className="join-header">
          <h1><i className="fas fa-smile"></i> Chit-Chat </h1>
        </header>
        <main className="join-main">
          <form>
            <div className="form-control">
              <label htmlFor="username">Chat Name</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username..."
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="room">Room</label>
              <input
                type="text"
                name="room"
                id="room"
                placeholder="Enter room name..."
                required
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
            <Link onClick={joinRoom(props.socket, name, room)} to={`/chat/${name}/${room}`}>
              <button
                type="submit"
                className="btn"
              >Join Chat</button>
            </Link>
          </form>
        </main>
      </div>
    </div>
  )
}

export default withRouter(JoinChat)
