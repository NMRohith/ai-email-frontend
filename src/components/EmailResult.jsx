function EmailResult({email}){

    return(

        <div className="result">

            <h2>

                Generated Email

            </h2>

            <h3>

                Subject

            </h3>

            <p>

                {email.subject}

            </p>

            <h3>

                Body

            </h3>

            <pre>

                {email.body}

            </pre>

        </div>

    );

}

export default EmailResult;