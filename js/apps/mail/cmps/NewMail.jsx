const { Link } = ReactRouterDOM
export function NewMail({show , prop}) {
    if ( show == false){
    return null
    }

    return (
        <div className="new-mail" >
            <form  className = 'new-mail' onSubmit={prop}>
                
                <input className = 'mail-to'  name = "to" placeholder="to:" type="email" />
                <input className = 'mail-subject' name = "subject" placeholder="subject:" type="text" />
                <textarea  className='mail-body' name="body"  cols="30" rows="10" placeholder="body:" ></textarea>
                <input type="submit" value="Submit" />

            </form>

        </div>
    )
}
