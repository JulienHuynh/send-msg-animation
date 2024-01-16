import Message from "../../molecules/Message/Message";
import ChatInput from "../../molecules/ChatInput/ChatInput";
import {useEffect, useRef, useState} from "react";
import {MessageType} from "../../../types/MessageType";
import gsap from "gsap";

function Chat() {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const messagesContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

            setMessages((prev) => {
               const newMessage: MessageType = {
                    id : prev.length + 1,
                    text: "Hello",
                    isMine: false
                }
                return [...prev, newMessage]
            })

    }, [])

    const sendMessage = (message: string) => {
        setMessages((prev) => {
            const newMessage: MessageType = {
                id : prev.length + 1,
                text: message,
                isMine: true
            }

            return [...prev, newMessage]
        })
    }

    useEffect(() => {
        if (messagesContainerRef.current) {
            const newMessageId = messages[messages.length - 1]?.id;
            if (newMessageId) {
                const messageElement = document.getElementById(`message-${newMessageId}`);
                const textMessageElement = messageElement!.querySelector(".text-message") as HTMLElement;
                const textWidth = textMessageElement!.getBoundingClientRect().width;

                gsap.fromTo(messageElement, { opacity: 0 }, { opacity: 1, duration: 0.6 });
                gsap.fromTo(
                    messageElement,
                    {
                        y: "50%",
                        ease: "power4.out",
                    },
                    {
                        y: 0,
                        duration: 0.45,
                    }
                );
                

                gsap.to(textMessageElement, { scale: 1.03, duration: 0, onComplete: () => {
                    gsap.to(textMessageElement, { scale: 1, duration: 0.30, delay: 0.30 });
                }});

                gsap.fromTo(textMessageElement, { width: "50px" }, { width: textWidth - 38, duration: 0.30});

                const container = messagesContainerRef.current;
                container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
            }
        }
    }, [messages]);

    return (
        <div className="chat">
            <div className="chat-container" ref={messagesContainerRef}>
                {
                    messages.map((message, index) => {
                        return <Message key={index}
                                me={message.isMine}
                                id={`message-${message.id}`}
                                message={message.text} />
                    })
                }
            </div>
            <ChatInput sendMessage={sendMessage} />
        </div>
    );
}

export default Chat;
