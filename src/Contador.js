import { useState } from "react";

function Contador() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Voce clicou {count} vezes</h2>
            <button onClick={() => setCount(count + 1)}>
                Clique aqui
            </button>
        </div>
    )
}

export default Contador;