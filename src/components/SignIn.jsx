import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import { useDispatch } from 'react-redux'
import { authActions } from '../redux/auth'

function SignIn() {
  const dispatch = useDispatch()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()
  const updateEmail = (e) => {
    setEmail(e.target.value)
  }
  const updatePassword = (e) => {
    setPassword(e.target.value)
  }
  const onSignIn = () => {
    if(!email || !password) {
      alert('Nhap du Email va Password')
    }
  
    let getUsers = localStorage.getItem('user')
    let userDataStorage = []
    if (getUsers) {
      userDataStorage = JSON.parse(getUsers)
    }
    const foundUser = userDataStorage.find((user) => {
      return user.email === email && user.password === password
    })
    
    if(!foundUser) {
      alert('Du lieu dang nhap khong dung!')
      setPassword('')
    } else {
      alert('Dang nhap thanh cong!')
      localStorage.setItem('loginedUser', JSON.stringify(foundUser))
      dispatch(authActions.ON_LOGIN(foundUser))
      clearAll()
      linkToHome()
    }
  }

  const clearAll = () => {
    setEmail('')
    setPassword('')
  }

  const linkToSignUp = () => {
    navigate("/signup")
  }
  
  const linkToHome = () => {
    navigate('/')
  }
  return (
    <div className="d-flex justify-content-center pt-5">
      <div className="card" style={{ width: "36rem" }}>
        <div className="card-body ">
          <p className="my-5 text-center fs-1 fst-italic">Sign In</p>
          <div className="d-flex flex-column w-50 m-auto ">
            <div className="d-flex flex-column sign-form">
              <input value={email} onChange={updateEmail} className="border p-3" type="email" placeholder="Email" />
              <input
                value={password}
                onChange={updatePassword}
                className="border p-3"
                type="password"
                placeholder="Password"
              />
            </div>
            <button onClick={onSignIn} className='my-4 btn btn-dark sign-btn p-3'>SIGN IN</button>
            <p className="text-center my-3 text-body-tertiary fst-italic fs-5">
              <span>Create an account? </span>
              <span className='link-signup' onClick={linkToSignUp}>Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
