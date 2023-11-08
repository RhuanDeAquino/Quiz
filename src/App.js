import React, { useState } from 'react'
import styled from 'styled-components'
import Quiz from './pages/game'

const Content = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("https://img.elo7.com.br/product/zoom/38BCBAB/tecido-xadrez-cowboy-toy-story-140-cm-x-50-cm-tecidos-estampados.jpg");
`

const BoxContent = styled.div`
  max-width: 800px;
  max-height: 800px;
  width: 95vw;
  height: 90vh;
  background-color: #191970;
  border: 5px solid #191970;
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

  > h1 {
    color: #fff;
    font-family: 'Federant', serif;
    font-size: 4rem;

    > p {
      margin: 0;
      font-size: 2rem;
      color: red;
    }
  }
`

const ButtonStart = styled.button`
  width: auto;
  height: 60px;
  border: 3px solid green;
  border-radius: 45px;
  transition: all 0.3s;
  cursor: pointer;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ6X3LUT7u4hgHwJhXHdg78ARxNL3prCczPJHpdeO7NGthIOnOWysoJjeKx91gI2epn8&usqp=CAU ");
  font-size: 1.2em;
  font-weight: 550;
  font-family: 'Montserrat', sans-serif;
  padding: 0.7rem;
  color: red;
  font-weight: 600;

  &:hover {
    background: green;
    color: white;
    font-size: 1.5em;
  }
`;


const BoxButton = styled.div`
width: 100%;
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
            <h1> Quiz
              <p>de coisas aleatoriamente aleatorias</p>
            </h1>
            <img src="https://media.tenor.com/bhW1pGGR9jcAAAAj/meme-knuckles.gif" alt="img" />
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