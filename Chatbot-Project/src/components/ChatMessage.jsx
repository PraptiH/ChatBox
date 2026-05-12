import {Chatbot} from 'supersimpledev'
import userImg from '../assets/user.png'
import robotImg from '../assets/robot.png'

export function ChatMessage({ message, sender, }) {

  return (
    <div className={
      sender === 'user' ? 'chatTextUser' : 'chatTextRobot'
    }>
      {sender === 'robot' && <img className='profileImg' src={userImg} alt="" />}

      <div className="chatText">{message}</div>

      {sender === 'user' && <img className='profileImg' src={robotImg} alt="" />}
    </div>
  )
}