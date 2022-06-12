import React, { useState } from "react";

function UseState() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [info, setInfo] = useState({
    email : '',
    pass: ''
  })

  console.log('jjfjfjfjf', info)

  const onChangeHandler = () => {

  }

  const [array, setArray] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();


  };

  console.log('dadaa',array)
  return (
    <>
      <form onClick={onSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          label="email"
          value={info.email}
          autoComplete="off"
          // onChange={(e) => setInfo((prev) => ({...prev, email : e.target.value}) )}
          onChange={e => {
            setInfo(prev => ({
              ...prev,
              email : e.target.value
            }))
          }}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          label="password"
          value={info.pass}
          // onChange={(e) => setInfo((prev) => ({...prev, pass : e.target.value}))}
          onChange= {e => {
            setInfo(prev => ({
              ...prev,
              pass : e.target.value
            }))
          }}
        />

        <button type="submit" >
          Submit
        </button>
      </form>
      {array.map((item) => {
        return (
          <div>
            <h2>{item.email}</h2>
            <h2>{item.pass}</h2>
          </div>
        );
      })}
    </>
  );
}

export default UseState;
