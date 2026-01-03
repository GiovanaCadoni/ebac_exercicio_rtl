import { render, screen, fireEvent } from '@testing-library/react'
import Comentarios from './Comentarios'

describe('Inserção de comentários usando data-testid', () => {
    test('deve inserir dois comentários na lista', () => {
        render(<Comentarios />)

        const input = screen.getByTestId('input-comentario')
        const botao = screen.getByTestId('botao-adicionar')

        // Primeiro comentário
        fireEvent.change(input, {
            target: { value: 'Primeiro comentário' }
        })
        fireEvent.click(botao)

        // Segundo comentário
        fireEvent.change(input, {
            target: { value: 'Segundo comentário' }
        })
        fireEvent.click(botao)

        // Valida os textos
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument()

        // Valida a quantidade de comentários
        const itens = screen.getAllByTestId('item-comentario')
        expect(itens).toHaveLength(2)
    })
})
