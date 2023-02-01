import React from 'react'
import { Container } from 'react-bootstrap'
import List from '../App/List/List'
import Board from '../Components/Board'
import ListBar from '../Components/ListBar'

function Home() {

  return (
    <Container className='mt-4'>
      <ListBar/>
      <Board>
      </Board>
    </Container>
  )
}

export default Home