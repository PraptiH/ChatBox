import { useState} from 'react'
import { Chatbot } from 'supersimpledev'

export function ChatInput({ chatMessages, setChatMessages }) {

    const [inputText, setInputText] = useState('')

    function saveInputText() {
        setInputText(event.target.value)
    }

    function sendMessage() {

        const newChatMessages = [

            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }

        ]

        setChatMessages(newChatMessages)
        setInputText('')

        const response = Chatbot.getResponse(inputText)
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ])
        console.log(response)
    }

    function sendText() {
        if (event.key === 'Enter') {
            const newChatMessages = [

                ...chatMessages,
                {
                    message: inputText,
                    sender: 'user',
                    id: crypto.randomUUID()
                }

            ]

            setChatMessages(newChatMessages)
            setInputText('')

            const response = Chatbot.getResponse(inputText)
            setChatMessages([
                ...newChatMessages,
                {
                    message: response,
                    sender: 'robot',
                    id: crypto.randomUUID()
                }
            ])
            console.log(response)
        }

        if (event.key === 'Escape') {
            setInputText('')
        }
    }

    return (
        <div className="chatField">
            <input className="chatInput" placeholder="Send a message to ChatBox" size="50"
                onChange={saveInputText}
                onKeyDown={sendText}
                value={inputText}
            />
            <button className="sendBtn" onClick={sendMessage}>Send</button>
        </div>
    )
}