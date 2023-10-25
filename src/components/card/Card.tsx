import {useState} from 'react';

interface CardProps {
    titulo: string;
    descricao: string;
}
  
function Card(props : CardProps){
    const [valor, setValor] = useState(0)

    function addMaisUm(){
        setValor(valor + 1)
    }

    return (
        <div>
            <div style={{
            fontStyle: "italic"
        }}>
            <h2>{props.titulo}</h2>
        </div>
        
        <div style={{
            width: "500px",
            border: "2px solid #676750",
            margin: "10px",
            display: "flex",
            justifyContent: "center",
            padding: "16px",
        }}>
            
            <p>{props.descricao}</p>
    
            <button onClick={addMaisUm}>Curtir: {valor}</button>
        </div>
        
        </div>
    );
}

export default Card;