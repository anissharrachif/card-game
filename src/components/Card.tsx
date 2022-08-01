import React, {useEffect} from 'react'
import './card.css'

interface Props {
    path : {id : string, path : string, revealed : boolean};
    onCardClick : any;
    discovered: boolean;
  }



function Card({path , onCardClick, discovered}  : Props) {
    const inconito = "https://img.myloview.fr/stickers/carte-de-jeu-traditionnelle-verso-400-27931338.jpg" // le verso des images non découvertes

    const onCoverClick = ()=>{
            onCardClick(path)
    }

    
    return (
        <div className='card'>
            <div className={discovered ? "card__discovered" : ""}>
                <img 
                    src={path.path}
                    key={path.path}
                    className='card__recto__image'
                />
                <img 
                    src={inconito}
                    key={inconito}
                    className='card__verso__image'
                    onClick={onCoverClick}
                />
            </div>
        </div>
    )
}

export default Card