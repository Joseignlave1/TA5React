import {useState } from "react"

const Button = () => {
    const [visible, setVisible] = useState(false);
    return(
        <div>
            <button onClick={!visible ? () => setVisible(true) : () => setVisible(false)}>Click me</button>
            {visible &&(
                <p>{"Esto es un texto"}</p>
            )}
            {!visible && (
                <p></p>
            )}

            {visible ? <p>Este texto se va a mostrar</p> : <p></p>}
        </div>
    )
}

export default Button;