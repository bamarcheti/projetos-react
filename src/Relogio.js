import React from 'react';

function Relogio() {
    // let time = new Date();
    // const [hora, setHora] = useState(23);
    // const [minuto, setMinuto] = useState(58);
    // const [segundo, setSegundo] = useState(50);
    let today = new Date();
    let hora = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    
    return (
        <div>
            {/* <h2> {hora} : {minuto} : {segundo} </h2> */}
        </div>
    );
}

export default Relogio;