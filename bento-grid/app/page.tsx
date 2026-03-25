import React from 'react'
import Container from './components/Container'
import Grid from './components/Grid'


const page = () => {
  return (
    <div>
      <Container>
        <div className="leftline border-[0.5px] h-full border-neutral-100 absolute left-0"></div>
        <div className="rightline  border-[0.5px] h-full border-neutral-100 absolute right-4"></div>
        <Grid />
      </Container>
    </div>
  )
}


export default page