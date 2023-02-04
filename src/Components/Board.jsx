import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ListNode from './list/ListNode'
import listImg from '../Images/array.png'

function Board({data}) {
    //let boardHeight=(data<8)?"450":`${516+((data-8)+40*(data-8))}`
    const style={
        backgroundColor:"#CCD2D8",
        display:"flex",
        minHeight:'450px',
        paddingTop:'15px'
    }
    const listImgStyle={
      height:'100px',
      width:'200px',
      position:'relative',
      left:'370px'
    }
    const lengthPosition={
      position:'relative',
      left:'390px',
      bottom:'65px'
    }
  return (
    <Container style={style} className="rounded-bottom d-flex flex-column justify-content-center" >
      {data.map((num,index)=>{return (
        <ListNode number={num} key={`${index}-array-list-node`}/>
      )})}
      <img src={listImg} style={listImgStyle}></img>
      <h4 style={lengthPosition}>{data.length}</h4>
    </Container>
  )
}

export default Board