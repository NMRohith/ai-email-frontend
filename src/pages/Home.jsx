import {useState} from "react";

import Header from "../components/Header";
import EmailForm from "../components/EmailForm";
import EmailResult from "../components/EmailResult.jsx";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

function Home(){

    const[email,setEmail]=useState(null);

    const[loading,setLoading]=useState(false);

    const[error,setError]=useState("");

    return(

        <>

            <Header/>

            <EmailForm

                setEmail={setEmail}
                setLoading={setLoading}
                setError={setError}

            />

            {

                loading && <Loader/>

            }

            {

                error && <ErrorMessage message={error}/>

            }

            {

                email && <EmailResult email={email}/>

            }

        </>

    );

}

export default Home;