import React, { useState } from "react";

function ChatInput({ sendMessage }: { sendMessage: (message: string) => void }) {
    const [message, setMessage] = useState<string>("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && message !== "") {
            e.preventDefault();
            sendMessage(message);
            setMessage("");
        }
    };

    return (
        <div className="chat-input">
            <input
                className="text-input"
                type="text"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default ChatInput;
