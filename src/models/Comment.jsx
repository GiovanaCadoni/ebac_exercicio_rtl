import { useState } from 'react'

function Comentarios() {
    const [comentarios, setComentarios] = useState([])
    const [texto, setTexto] = useState('')

    function adicionarComentario() {
        if (texto.trim() === '') return
        setComentarios([...comentarios, texto])
        setTexto('')
    }

    return (
        <div>
            <input
                data-testid="input-comentario"
                placeholder="Digite um comentário"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />

            <button
                data-testid="botao-adicionar"
                onClick={adicionarComentario}
            >
                Adicionar
            </button>

            <ul data-testid="lista-comentarios">
                {comentarios.map((comentario, index) => (
                    <li key={index} data-testid="item-comentario">
                        {comentario}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Comentarios
