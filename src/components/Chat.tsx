 import React , { useState, createContext , useContext }from 'react';
 import { FaCommentDots }  from "react-icons/fa";
 import logo from "./../images/icon.png";
 

 const ChatContext = createContext(null);

function ServiceStep1  () {
    const service = useContext(ChatContext);
    const prestations = ["Nettoyage bureau", "Nettoyage Textile", "Nettoyage résidentiel"];
    const surfaces = ["- de  50m2", "50 à 100 m2", "100 à 200m2", "+ de 200m2"];
    console.log("service",service)
    return (
        <div className="steps">
            <div className="step-form">
                <p>Quel type de prestation vous intéresse ? </p>
                <div className="container">
                    {prestations.map((prestation) => (
                        <button className={`choice-box ${service.prestation == prestation ? "checked" : ""}`} onClick={()=>handlePrestationState("prestation", prestation)}>{prestation}</button>
                    ))}
                </div>
            </div>
            <div className="step-form">
                <p>Quelle est la Surface approximative à nettoyer ? </p>
                <div className="container">
                    {surfaces.map((surface) => (
                        <button className={`choice-box ${service.surface == surface ? "checked" : ""}`} onClick={() => handlePrestationState("surface", surface)}>{surface}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}


function ServiceStep2 () {
    const service = useContext(ChatContext); 

    //appel API pour récupérer les créneaux disponibles
    //notamment récupérez les  créneaux de 2026

    //appel API pour confirmer le rendez vous à la faim

    //visuel mois, semaine

    return(
        <div>
            <p>Mois</p>
            <select name="months" id="months">
                <option value="jan">Janvier</option>
                <option value="fev">Février</option>
            </select>
            <p>Semaine</p>
            <select name="weeks" id="weeks">
                <option value="jan">22/07</option>
                <option value="fev">27/07</option>
            </select>
            <p>Tableau</p>
        </div>
    )
}

function ServiceStep3(){
    const service= useContext(ChatContext);

    return(
        <div>
            <div>
                <input type="checkbox" id="scales" name="textiles" checked />
                <label for="textiles">Textiles</label>
            </div>
            <p>Une demande particulière</p>
            <textarea name="message" id="message"></textarea>
        </div>
    )

}

 function StepSwitcher ({step}) {

    switch(step) {
        case 1 : 
            return (
                <ServiceStep1/>
            );
        case 2 :
            return (
                <ServiceStep2/>
            );
        case 3 :
            return (
                <ServiceStep3/>
            );
        default :
            return ( <div> No step</div>)

    }
 }


 function Chat() {
   const [openChat, setChatOpen ] = useState(false);
   const [step, setStep] = useState(0);
   const [isConnected, setConnected] = useState(true);
   const [state, setState] = useState({
        prestation : '', //1
        surface :'',  //1
        date : '', //3
        hour : {
            start : "",
            end : ""
        },
        options : [], //4
        note : ""
   });
   const totalSteps = 3;


   function handlePrestationState(key, value) {
    setState({
        ...state,
        [key] : value
    });
    console.log(state)
   }
   return (
     <div id="chat">
        <div className="chat-box" style={{ display : openChat ? "flex" : "none"}}>
            <div className="chat-header">
                <figure style={{margin : "0px"}}>
                    <img src={logo} alt="Logo" className="header-logo-image" />  
                </figure>
                <div className="chat-header-textbox">
                    <p className="chat-name">Assistant Clean</p>
                    <div className="online-box">
                         <div className='connect-light' style={{ backgroundColor : isConnected ? "green" : "red"}}></div>
                         <p>En Ligne</p>
                    </div>
                </div>
                <button onClick={(e) => setChatOpen(!openChat)}>X</button>
            </div>
            <div className="chat-content">
                <div className="chat-message">
                    Bonjour ! Je suis votre assistant , je vais vous guider pas à pas pour établir votre devis
                </div>
                <ChatContext.Provider value={state}>
                    <div className="steps">
                        <p>Etape {step+1} sur {totalSteps}</p>
                        <div className="step-jauge">
                            <div className="step-advancement" style={{width : `${Math.round((step + 1) /totalSteps * 100)}%`}}></div>
                        </div>
                        
                        <StepSwitcher step={step+1}/>
                        
        
                    </div>
                    <button onClick={()=> {if (step < totalSteps -1 ) {setStep(step + 1) } else { console.log("send reservation")}}}>{step < totalSteps -1  ?  "Suivant" : "Confirmer"}</button>
                </ChatContext.Provider>
            </div>
        </div>
       
        <div className="chat-bubble" onClick={(e) => setChatOpen(!openChat)}>
            <FaCommentDots style={{color : "blue"}}/>
        </div>
       
     </div>
   )
 }

 /*
                 <div className="step-form">
                            <p>Quel type de prestation vous intéresse ? </p>
                            <div className="container">
                                {prestations.map((prestation) => (
                                    <button className={`choice-box ${state.prestation == prestation ? "checked" : ""}`} onClick={()=>handlePrestationState("prestation", prestation)}>{prestation}</button>
                                ))}
                            </div>
                        </div>
                        <div className="step-form">
                            <p>Quelle est la Surface approximative à nettoyer ? </p>
                            <div className="container">
                                {surfaces.map((surface) => (
                                    <button className={`choice-box ${state.surface == surface ? "checked" : ""}`} onClick={() => handlePrestationState("surface", surface)}>{surface}</button>
                                ))}
                            </div>
                        </div>*/
 
 export default Chat
 