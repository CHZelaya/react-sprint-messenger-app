import './message-input.styles.scss'

const MessageInput = () => {
    return (
        <div className="message-input-container">
            <span>Message Input Component, reporting for duty.</span>
            <form>
                <label>
                    Type your message here:
                </label>
                <br></br>
                <input type="text">

                </input>
            </form>
        </div>
    )
}

export default MessageInput