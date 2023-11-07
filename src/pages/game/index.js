import { useState } from "react";
import styled from 'styled-components';
import Question from "../../components/questions";

const Content = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
const Button = styled.button`
  color: red;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid red;
  padding: 10px 20px;
  font-size: 17px;
  font-weight: bold;
  background: transparent;
  position: relative;
  transition: all 1s;
  overflow: hidden;

  &:hover {
    color: white;
    background-color: red;
  }

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 0%;
    top: 0;
    left: -40px;
    transform: skewX(45deg);
    background: red;
    z-index: -1;
    transition: all 1s;
  }

  &:hover::before {
    width: 160%;
  }
`;

const ContentResult = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 800px;
  width: 100%;

  > img {
    width: 100%;
    margin: 1rem 0 7rem 0;
  }
`

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const questions = [
    {
      pergunta: 'Qual o maior vilão em Irmão do Jorel ?',
      options: ['Shostners & Shostners', 'Cocô Magico', 'Tenente Rambozo', 'Dona Lola'],
      answer: 'Cocô Magico',
    },
    {
      pergunta: 'Da onde o Frango do filme Ta Dando Onda veio ?',
      options: ['Frio de Janeiro', 'Acrê', 'Havaí', 'Matogrossense do Sul'],
      answer: 'Matogrossense do Sul',
    },
    {
      pergunta: 'Qual a melhor maneira de aprender sobre historia ?',
      options: ['Estudando pelos livros', 'Assasins Creed e God Of War', 'Pesquisando na intenet', 'Documentarios'],
      answer: 'Assasins Creed e God Of War',
    },
    {
      pergunta: 'Qual o maior rapper em irmão do Jorel ?',
      options: ['Kassius Kleyton', 'Mc Outro Cara', 'MC Juju', 'Sprokinho'],
      answer: 'MC Juju',
    },
    {
      pergunta: 'Qual é a capital da França ?',
      options: ['Londres', 'Berlim', 'Enquanto o Neymar jogava la?', 'Madri'],
      answer: 'Enquanto o Neymar jogava la?',
    },
    {
      pergunta: 'Qual é o nome da banda do Carlos Felino ?',
      options: ['The Shostners', 'Cocô Mágico', 'Sprok Band', 'Cuecas em Chamas'],
      answer: 'Cuecas em Chamas',
    },
    {
      pergunta: 'Para onde a família de Coraline se muda no início do filme?',
      options: ['Nova York', 'Chicago', 'Miami', 'Oregon'],
      answer: 'Oregon',
    },
    {
      pergunta: 'Qual é o significado da frase "Wubba lubba dub dub"',
      options: ['Expressão de alegria e excitação', 'Grito de angústia e sofrimento', 'Cumprimento de saudação entre cientistas', 'Código secreto para suas aventuras interdimensionais'],
      answer: 'Grito de angústia e sofrimento',
    },
    {
      pergunta: 'Oque o personagem Butters de South Park, mais faz na serie ?',
      options: ['Se diverte', 'Planos Malignos como Professor Chaos', 'Fica de castigo', 'Apanha dos garotos da escola'],
      answer: 'Fica de castigo',
    },
    {
      pergunta: 'Quem disse a frase: "Se você já espera pela decepção, você não se decepciona"?',
      options: ["MJ", "Ned", "Tia May", "Doutor Estranho"],
      answer: 'MJ',
    },
  ];

  const handleOptionSelect = (selected) => {
    setSelectedOption(selected);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 100);
    }
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  const recarregar = () => {
    window.location.reload();
  };
  return (
    <Content>
      {currentQuestion < questions.length ? (
        <Question
          pergunta={questions[currentQuestion].pergunta}
          options={questions[currentQuestion].options}
          selectedOption={selectedOption}
          handleOptionSelect={handleOptionSelect}
        />
      ) : (
        <ContentResult>
          <p>Seu resultado foi {score}</p>
          <img
            src={
              score >= 0 && score <= 300
                ? 'https://media.tenor.com/yFeIzDCXAIIAAAAC/choque-de-cultura-tv-quase.gif'
                : score >= 400 && score <= 600
                  ? 'https://media.tenor.com/2vLfjyoy4Q4AAAAC/renan-fiquei.gif'
                  : score >= 700 && score <= 900
                    ? 'https://media.tenor.com/ElESavNMs2MAAAAC/julinho-maurilio.gif'
                    : 'https://global.discourse-cdn.com/nubank/original/3X/9/e/9e3baa3be525c95d01e7295e128b4dad81c85938.gif'
            }
            alt="Resultado"
          />
          <Button onClick={() => recarregar()}>
            Jogar Novamente
          </Button>
        </ContentResult>
      )}

      {currentQuestion < questions.length && (
        <Button onClick={handleNextQuestion}>
          {isLastQuestion ? 'Finalizar Quiz' : 'Próxima Pergunta'}
        </Button>
      )}
    </Content>
  )
}

export default Quiz;