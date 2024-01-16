import ProfilePicture from "../../atoms/ProfilePicture/ProfilePicture";

function Message({me, id, message}: {me: boolean; id: string; message: string}) {
    return (
        <div id={id} className={me ? "my-message" : "his-message"}>
            <div className={"text-message"}>
                {message}
            </div>
            <ProfilePicture width={45} height={45} />
        </div>
    );
}

export default Message;
