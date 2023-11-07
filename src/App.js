import React, { useState } from 'react'
import styled from 'styled-components'
import Quiz from './pages/game'

const Content = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffff00;
`

const BoxContent = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 800px;
  background-color: #A829E8;
  border: 2px solid #A829E8;
  border-radius: 10px;
  box-shadow: 8px 10px 0 #000;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 300px;
    height: 300px;
  }
`

const ButtonStart = styled.button`
  padding: 10px 20px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff80;
  text-shadow: none;
  background: transparent;
  box-shadow: transparent;
  border: 1px solid #ffffff80;
  transition: 0.5s ease;
  user-select: none;

  &:hover, &:focus {
    color: #ffffff;
    background: #008cff;
    border: 1px solid #008cff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff, 0 0 100px #008cff;
    font-size: 16px;
    border-color: transparent;
  }
`;


const BoxButton = styled.div`
width: 100 %;
height: 100px;
display: flex;
align-items: flex-end;
justify-content: flex-end;
`

const App = () => {
  const [start, setstart] = useState(true);
  return (
    <Content>
      <BoxContent>
        {start ?
          <>
            <h1> Quiz de coisas aleatoriamente aleatorias</h1>
            <img src="https://i.pinimg.com/originals/ed/05/b8/ed05b8eb1f74aec520f26ed7e4aa3220.jpg" alt="img" />
            <BoxButton>
              <ButtonStart id="btn" onClick={() => setstart(!start)}>
                Boralá começar ❱❱❱
              </ButtonStart>
            </BoxButton>
          </>
          :
          <Quiz />
        }
      </BoxContent >
    </Content >
  )
}

export default App