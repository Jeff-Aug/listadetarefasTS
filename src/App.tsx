import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'



const App = () => {
  const [list, setList] = useState<Item[]>([

    { id: 1, name: 'Fazer suco de jaca', done: false },
    { id: 2, name: 'Compra um bolo', done: true }

  ])
    //responsavel por receber e adcionar na lista
  const handleAddTask = (taskName: string) =>{
    let newList = [...list]

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList);


  }


  return (
    <C.Container>

      <C.Area>
        <C.Header> Lista de Tarefa</C.Header>
        <AddArea  onEnter={handleAddTask} />


        {list.map((item, index) => (

          <ListItem key ={index}  item={item}   />
          ))}
        {/* Lista de tarefas */}
      </C.Area>

    </C.Container>
  )
}

export default App;






