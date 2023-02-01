import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ListNode from './list/ListNode'

function Board() {
    const style={
        backgroundColor:"#CCD2D8",
        height:"70vh"
    }
    const [arrayNumbers, setArrayNumbers] = useState([])
  
  return (
    <Container style={style} className="rounded-bottom d-flex flex-column justify-content-center" >
        <ListNode number={1}/>
        <ListNode number={2}/>
        <ListNode number={3}/>
        <ListNode number={4}/>
        <ListNode number={5}/>
        <ListNode number={6}/>
        <ListNode number={7}/>
        <ListNode number={8}/>
        <ListNode number={9}/>
        <ListNode number={10}/>
    </Container>
  )
}

export default Board