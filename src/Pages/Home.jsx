import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import List from '../App/List/List'
import Board from '../Components/Board'
import ListBar from '../Components/ListBar'

function Home() {
  const [listData, setListData] = useState([])

  return (
    <Container className='mt-4' style={{paddingBottom:'10px'}}>
      <ListBar listSetter={setListData} listData={listData} />
      <Board data={listData}>
      </Board>
    </Container>
  )
}

export default Home