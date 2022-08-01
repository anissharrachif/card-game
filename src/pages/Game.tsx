import React, { useState, useEffect } from "react";
import "./game.css";
import Card from "../components/Card";
import type { RootState } from '../redux/store'

import { useSelector, useDispatch } from 'react-redux'
import { increamentCounter, resetCounter, updateCardsState,resetCards } from "../redux/cardSlice";
import ProgressBar from "../components/ProgressBar";

interface Carte {
    path : string;
    discovered: boolean;
  }

function Game() {
    const [firstChoice, setFirstChoice] = useState<Carte | null>();
    const [secondChoice, setSecondChoice] = useState<Carte | null>();


    //recuperer l'etat initial des cartes sur redux
  const reduxCards = useSelector((state: RootState) => state.cards.cards)
  const counter = useSelector((state: RootState) => state.cards.counter)
  const maxTv = useSelector((state: RootState) => state.cards.tentativesMax)
  const dispatch = useDispatch()
   // Tableau des cards randomly
  // verifier si les deux cartes selectionnées ne sont pas null et sont identiques
  useEffect(() => {
    // verifier si on a deux cartes selectionnées et si les cartes sont identiques
    if (firstChoice && secondChoice) {
          // desactiver le double click sur les cartes
      if (firstChoice.path == secondChoice.path) {
        let newCards: any[] | Carte[] = [];
        reduxCards.map((item : Carte) => {
          if (item.path === firstChoice.path) {
            let newItem = { ...item, revealed: true };
            newCards.push(newItem);
          } else {
            newCards.push(item);
          }
        });
        dispatch(updateCardsState(newCards))
      } else {
        onNotMatchEvent();
      }
    }
  }, [firstChoice, secondChoice]);

  const getRandomImages = () => {
    // dupliquer le contenu des images à afficher
    // réorganiser le tableau de façon aléatoire
    let newCardArray = [...reduxCards]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({...item, id: Math.random(), revealed : false}));
    dispatch(resetCards(newCardArray))
    dispatch(resetCounter()); // remettre le cpt à Zero
  };

  function handelBtnClick() {
    getRandomImages();
  }

  // selection d'une image
  function onCardClick(item : Carte) {
    if (firstChoice) {
      setSecondChoice(item);
    } else {
      setFirstChoice(item);
    }
  }

  // reinitialisation des faces images si pas de match
  function onNotMatchEvent() {
    // on laisse 500 Ms avant de masquer les images non identiques
    setTimeout(()=>{
        setFirstChoice(null);
        setSecondChoice(null);
    }, 1000)
 
    // verification du nombres de tentatives et reset si le max est atteint
    if(counter>=maxTv){
        alert('Oups, le nombre de tentatives maximum est atteint !, le jeu va recommencer')
        getRandomImages()
      }else{
        dispatch(increamentCounter())
      }
  }


  const renderHeader = () =>{
    return <div className="game__header">
        <div>
            <button 
                className="game__header__btn"
                onClick={handelBtnClick}
            >Reset Game</button>
        </div>
        <div>
            <p className="game__counter">{`Tentatives :   ${counter} / ${maxTv}`}</p>
        </div>
        <div><ProgressBar value={counter * 100 / maxTv}/></div>
    </div>
  }

  return (
    <div className="game">
      {renderHeader()}
      <div className="game__cards__panel">
        {reduxCards.map((item) => (
          <div>
            <Card
              path={item}
              onCardClick={(item :Carte) => onCardClick(item)}
              discovered={
                item == firstChoice ||
                item == secondChoice ||
                item.revealed == true
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
