import React from 'react'
import { Container } from 'react-bootstrap'

function ListNode({number,position}) {
  const containerStyle={
    border: "2px solid #07064a",
    backgroundColor: "#0ac7b2",
    height:"40px",
    width:"60px",
    padding:'0px'
  }
  const numberStyle={
    paddingTop:'4px',
    paddingLeft:'0px',
    textAlign:'center'
  }
  return (
    <Container style={containerStyle} className="">
      <div style={numberStyle}>{number}</div>
    </Container>
  )
}

export default ListNode