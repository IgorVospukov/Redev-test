import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  const navigate=useNavigate();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [valid, setValid] = useState(false);

  const emailHandler = (e) => {
    setMail(e.target.value);
    const re =
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Wrong Email');
    } else {
      setEmailError('');
    }
  };

  const passHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length<3) {
      setPasswordError('Wrong Password');
    } else { 
      setPasswordError('');
    }
  };

  const isLogin = () => {
    if (emailError || passwordError){
      setValid(false);
    } else {
      setValid(!valid);
      localStorage.setItem("eMail",mail);
       navigate('/');
  }
  }

  return (
    <div className={styles.login}>
      <form>
        <img src={'/img/video-camera.png'} width={70} height={70} alt='' />
        {emailError && <div className={styles.forMail}>{emailError}</div>}
        <input
          className={styles.mail}
          value={mail}
          onChange={(e) => emailHandler(e)}
          name='email'
          type='text'
          placeholder='Enter your email'
        />
        {passwordError && <div className={styles.forPassword}>{passwordError}</div>}
        <input
          className={styles.pass}
          value={password}
          onChange={(e) => passHandler(e)}
          name='password'
          type='password'
          placeholder='Password'
        />
        <button onClick={isLogin}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
