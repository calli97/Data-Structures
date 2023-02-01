import React from 'react'
import { Container } from 'react-bootstrap'

function ListNode({number,position}) {
  const style={
    border: "2px solid #07064a",
    backgroundColor: "#0ac7b2",
    height:"40px",
    width:"40px",
    //position:"relative",
    //top:"20px"
  }
  return (
    <Container style={style} className="text-center text-align">
      <div style={{padding:"3px 0"}}>{number}</div>
    </Container>
  )
}

export default ListNode