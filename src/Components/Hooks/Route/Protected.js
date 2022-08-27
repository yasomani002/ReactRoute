import React from 'react'

function Protected(props) {
    const { Component } = props
   
  return (
    <>
    abc
    {Component}
    </>
  )
}

export default Protected