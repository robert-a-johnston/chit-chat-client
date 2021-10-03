import React from 'react'
import './ChatIndex.css'

export default function ChatIndex () {
  return (
    <div>
      <div className="join-container">
        <header className="join-header">
          <h1><i className="fas fa-smile"></i> Chit-Chat Git-Chat</h1>
        </header>
        <main className="join-main">
          {/* Directs to chat.html no javascript needed
              will put username and form selection into query string  */}
          <form action="chat.html">
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username..."
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="room">Room</label>
              <select name="room" id="room">
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="C#">C#</option>
                <option value="Ruby">Ruby</option>
                <option value="Java">Java</option>
              </select>
            </div>
            <button type="submit" className="btn">Join Chat</button>
          </form>
        </main>
      </div>
    </div>
  )
}
