 import React , { useState }from 'react';
 import { FaCommentDots }  from "react-icons/fa";
 
 function Chat() {
   const [openChat, setChatOpen ] = useState(false);
   const [step, setStep] = useState(0);
   const totalSteps = 5;
   const prestations = ["Nettoyage bureau", "Nettoyage Textile", "Nettoyage résidentiel"];
   const surfaces = ["- de  50m2", "50 à 100 m2", "100 à 200m2", "+ de 200m2"];
   return (
     <div id="chat">
        <div className="chat-box" style={{ display : openChat ? "flex" : "none"}}>
            <div className="chat-header">
                <figure>
                    <img src="" alt="" />
                </figure>
                <div className="chat-header-textbox">
                    <h2>Assistant Clean</h2>
                    <p>En Ligne</p>
                </div>
                <button onClick={(e) => setChatOpen(!openChat)}>X</button>
            </div>
            <div className="chat-content">
                <div className="chat-message">
                    Bonjour ! Je suis votre assistant , je vais vous guider pas à pas pour établir votre devis
                </div>
                <div className="steps">
                    <p>Etape {step+1} sur {totalSteps}</p>
                    <div className="step-jauge">
                        <div className="step-advancement" style={{width : `${Math.round(step/totalSteps * 100)}%`}}></div>
                    </div>
                    <div className="step-form">
                        <p>Quel type de prestation vous intéresse ? </p>
                        <div className="container">
                            {prestations.map((prestation) => (
                                <p>{prestation}</p>
                            ))}
                        </div>
                    </div>
                    <div className="step-form">
                        <p>Quelle est la Surface approximative à nettoyer ? </p>
                        <div className="container">
                            {surfaces.map((surface) => (
                                <p>{surface}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <button>Confirmer</button>
            </div>
        </div>
       
        <div className="chat-bubble" onClick={(e) => setChatOpen(!openChat)}>
            <FaCommentDots style={{color : "blue"}}/>
        </div>
       
     </div>
   )
 }
 
 export default Chat
 