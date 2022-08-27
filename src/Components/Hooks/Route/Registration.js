import React, { useState } from 'react'
import NavBar from './NavBar'

function Registration() {

    const [name , setName] = useState('')
    const [mail , setMail] = useState('')
    const [pass , setPass] = useState('')

    async function signUp(){
        let item = { name: name , mail:mail , pass: pass }
        localStorage.setItem( "user_infor" , JSON.stringify(item))
    }

    
  return (
    <>
    <NavBar />
    <from >
    <label>User Name</label>
    <input type="text" name="useid" value={name} onChange={(e) => setName(e.target.value)} />

    <label>Mail</label>
    <input type="email" name="password" value={mail} onChange={(e) => setMail(e.target.value)} />

    <label>password</label>
    <input type="password" name="password" value={pass} onChange={(e) => setPass(e.target.value)} />

    <button onClick={signUp} >Register</button>
    </from>
    </>
  )
}

export default Registration