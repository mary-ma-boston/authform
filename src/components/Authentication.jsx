import React, {useState} from 'react';

import './Authentication.css';

const Authentication = (props) => {
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const [usernameIsValid, setUsernameIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
 

    const inputUsernameHandler = (e) => {
        setInputUsername(e.target.value);
      
        let newUsername = e.target.value;
        if(newUsername.length > 0) {
           setUsernameIsValid(true);
        } else {
            setUsernameIsValid(false);
        }
    };

    const inputPasswordHandler = (e) => {
        setInputPassword(e.target.value);
        
        let newPassword = e.target.value;
        if(newPassword.length > 0) {
           setPasswordIsValid(true);
        } else {
            setPasswordIsValid(false);
        } 
    };

    const onHandleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(inputUsername, inputPassword);   

        setInputUsername('');
        setInputPassword('');
        setUsernameIsValid(false);
        setPasswordIsValid(false);

    };

    const buttonIsAble = usernameIsValid && passwordIsValid; 
        

    return (
        <div className='container'>
            <h1>Login in</h1>
            <form className='form' onSubmit={onHandleSubmit}>
                <div>
                    <label htmlFor='username-input'>Username  </label>
                    <input type="text" id='username-input' value={inputUsername} onChange={inputUsernameHandler}/>
                    {/* {isSubmited && !inputUsername && <div>Username is required!</div>}  */}
                </div>
                <div>
                    <label htmlFor='password-input'>Password  </label>
                    <input type="password" id='password-input' onChange={inputPasswordHandler} value={inputPassword}/>
                    {/* {isSubmited && !inputPassword && <div>Password is required!</div>}  */}
                </div>
                <button type="submit" id="login-button" disabled={!buttonIsAble} className='loginButton'>Login</button>
            </form>     
        </div>      
    )
}

export default Authentication;