import { useState } from "react";
import "./App.css";

const cardImage = [
  { src: "/Img/helmet-1.png", matched: false },
  { src: "/Img/potion-1.png", matched: false },
  { src: "/Img/ring-1.png", matched: false },
  { src: "/Img/scroll-1.png", matched: false },
  { src: "/Img/shield-1.png", matched: false },
  { src: "/Img/sword-1.png", matched: false },
];


function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoinceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //Shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImage, ...cardImage]
      .sort(() => Math.random - 0.5)
      .map((card) => ({ ...card, id: Math.random }));

    setChoiceTwo(null);
    setChoiceTwo(null);
    setCards(shuffleCards)
    setTurns(0);
  }


  return <div className="App"></div>;
}

export default App;
