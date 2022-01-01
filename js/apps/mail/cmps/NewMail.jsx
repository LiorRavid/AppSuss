export function NewMail({show , prop, close}) {
    if ( show == false){
    return null
    }

    return (
        <div className="new-mail" >
            <form  className = 'new-mail' onSubmit={prop}>
                <input className = 'mail-to'  name = "to" placeholder="to:" type="email" />
                <input required="required" minlength="1" className = 'mail-subject' name = "subject" placeholder="subject:" type="text" />
                <textarea  className='mail-body' name="body"  cols="30" rows="10" placeholder="body:" ></textarea>
                <div className='compose-btns'>
                <input className='compose-send' type="submit" value="Send" />
                <button className = 'close-compose' onClick ={() => close()}></button>
                
                </div>

            </form>

        </div>
    )
}
