import React, {useState} from 'react';

import './Authentication.css';

const Authentication = () => {
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [isSubmited, setIsSubmited] = useState(false);
    const [islogging, setIsLogging] = useState(false);

    const inputUsernameHandler = (e) => {
        setInputUsername(e.target.value);
        console.log('user'+e.target.value)
    };

    const inputPasswordHandler = (e) => {
        setInputPassword(e.target.value);
        console.log('password'+e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
        setIsSubmited(true);
       

        // fetch url, if success get username and password;
        const response = fetch('');
        const data = response.json();
        let username, password;
        if(username && password) {
            setIsLogging(true);
            //switch to main page
        } 
    }



    return (
        <div className='container'>
            <h1>Login in</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username  </label>
                    <input type="text" id='username' value={inputUsername} onChange={inputUsernameHandler}/>
                    {isSubmited && !inputUsername && <div>Username is required!</div>} 
                </div>
                <div>
                    <label htmlFor='password'>Password  </label>
                    <input type="password" id='password' onChange={inputPasswordHandler}/>
                    {isSubmited && !inputPassword && <div>Password is required!</div>} 
                </div>
                <button type="submit" className='loginButton'>Login</button>
            </form>     
        </div>      
    )
}

export default Authentication;