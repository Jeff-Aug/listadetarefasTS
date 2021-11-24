import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/item'
import { ListItem } from './components/ListItem'



const App = () => {
  const [list, setList] = useState<Item[]>([

    { id: 1, name: 'Fazer suco de jaca', done: false },
    { id: 2, name: 'Compra um bolo', done: true }

  ])

  return (
    <C.Container>

      <C.Area>
        <C.Header> Lista de Tarefa</C.Header>
        {/* Área de adicionar novas tarefas */}
        {list.map((item, index) => (

          <ListItem key ={index}  item={item}   />
          ))}
        {/* Lista de tarefas */}
      </C.Area>

    </C.Container>
  )
}

export default App;






