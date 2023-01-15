import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";


function SignUp() {
  const [inputName, setInputName] = React.useState('')
  const [inputEmail, setInputEmail] = React.useState('')
  const [inputPassword, setInputPassword] = React.useState('')
  const [inputPhone, setInputPhone] = React.useState('')
  const navigate = useNavigate();

  const updateName = (e) => {
    setInputName(e.target.value)
  }
  const updateEmail = (e) => {
    setInputEmail(e.target.value)
  }
  const updatePassword = (e) => {
    setInputPassword(e.target.value)
  }
  const updatePhone = (e) => {
    setInputPhone(e.target.value)
  }


  const onSignUp = () => {
    const errors = []
    validInput(errors)
    let getUsers = localStorage.getItem('user')
    let userDataStorage = []
    if (getUsers) {
      userDataStorage = JSON.parse(getUsers)
    }
    const foundUser = userDataStorage.find((user) => {
      return user.email === inputEmail
    })
    
    if(foundUser) {
      errors.push('Email da ton tai!')
    }

    if(errors.length) {
      alert(errors[0])
    } else {
      const userDataInput = {
        fullname: inputName,
        email: inputEmail,
        password: inputPassword,
        phone: inputPhone
      }
      userDataStorage.push(userDataInput)
      console.log(userDataStorage)
      localStorage.setItem('user', JSON.stringify(userDataStorage));
      linkToSignIn()
      clearInput()
    }
  }

  const validInput = (errors) => {
    if(!inputName || !inputEmail || !inputPassword || !inputPhone) {
      errors.push('Nhap du Full Name, Email, Password, Phone!')
    } else if(inputPassword.length <= 8) {
      errors.push('Password phai nhap tren 8 ky tu')
    }
  }

  function linkToSignIn() {
    navigate("/login");
  }

  const clearInput = () => {
    setInputName('')
    setInputEmail('')
    setInputPassword('')
    setInputPhone('')
  }

  return (
    <div className="d-flex justify-content-center pt-5">
      <div className="card" style={{ width: "36rem" }}>
        <div className="card-body">
          <p className="my-5 text-center fs-1 fst-italic">Sign Up</p>
          <div className="d-flex flex-column w-50 m-auto ">
            <div className="d-flex flex-column sign-form">
              <input value={inputName} onChange={updateName} className="border-0 p-3" type="email" placeholder="Full Name" />
              <input value={inputEmail} onChange={updateEmail} className="border-0 p-3" type="email" placeholder="Email" />
              <input value={inputPassword} onChange={updatePassword}
                className="border-0 p-3"
                type="password"
                placeholder="Password"
              />
              <input value={inputPhone} onChange={updatePhone} className="border-0 p-3" type="phone" placeholder="Phone" />
            </div>
            <button onClick={onSignUp} className='my-4 btn btn-dark sign-btn p-3'>SIGN UP</button>
            <p className="text-center my-3 text-body-tertiary fst-italic fs-5">
              <span>Login? </span>
              <span className='link-signin' onClick={linkToSignIn}>Click</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
