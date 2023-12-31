import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  color: #fff;

  > h2 {
    @media(max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  > ul {
    list-style: none;
    width: 100%;
    gap: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media(max-width: 600px) {
      flex-direction: column;
    }

    > li {
      width: calc(50% - 0.5rem);
      height: 5rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      border: 5px solid #fff;
      border-radius: 12px;
      color: #fff;

      @media(max-width: 600px) {
      width: 100%;
      font-size: 1rem;
      height: 3rem;
    }
    }
  }
`;

const Questions = ({ pergunta, options, selectedOption, handleOptionSelect }) => {
  return (
    <Content selected={selectedOption !== null}>
      <h2>{pergunta}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionSelect(option)}
            style={{
              background: option === selectedOption ? 'green' : '#fff',
              color: option === selectedOption ? '#fff' : '#000'
            }}
          >
            <div>
              {option}
            </div>
          </li>
        ))}
      </ul>
    </Content>
  );
};

export default Questions;
