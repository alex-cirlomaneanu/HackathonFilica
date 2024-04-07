// ChatInterface.jsx
import React, { useState } from 'react';
import './ChatInterface.css'; // Make sure to create this CSS file
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: 'ng-i7hP9qQuKnrN0t3MxfGjZx3hAddbB',
    baseURL: 'https://api.naga.ac/v1',
    dangerouslyAllowBrowser: true
});
const ChatInterface = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState(''); // To capture the user's input
    const [messages, setMessages] = useState([]);
    const handleSendMessage = async () => {
        if (!userMessage.trim()) return;

        const updatedMessages = [...messages, { role: 'user', content: userMessage }];
        setMessages(updatedMessages);
        setUserMessage(''); // Clear the input after adding the user message

        // Simulate fetching an AI response (replace with actual API call)
        const simulatedAIResponse = "That's a good question! Let me think...";
        setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: simulatedAIResponse }]);
        try {
            // Here you would call the OpenAI API with the updatedMessages as part of the request
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: updatedMessages, // Use the updated messages for the API call
            });

            // Assuming the API response includes the assistant's reply, add it to the messages
            setMessages(prev => [...prev, { role: 'assistant', content: completion.choices[0].message.content }]);
        } catch (error) {
            console.error('Error fetching the AI response:', error);
        }
    };
    const toggleChat = () => setIsOpen(!isOpen);

    return (

        <div className="chat-interface">
            {!isOpen && (
                <button onClick={toggleChat} className="chat-bubble">
                    {/* Here you can add an icon for the chat bubble */}
                    💬
                </button>
            )}
            {isOpen && (
            <div className="chat-window">
                <div className="chat-header">
                    <h2>Chat with us!</h2>
                    <button onClick={toggleChat} className="close-chat">✖</button>
                </div>
                <div className="chat-body">
                {messages.map((message, index) => (
                        <div key={index} className={message.role}>
                            <p>{message.content}</p>
                        </div>
                    ))}
                </div>
                <div className="chat-footer">
                    <input
                        type="text"
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        placeholder="Type a message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default ChatInterface;
