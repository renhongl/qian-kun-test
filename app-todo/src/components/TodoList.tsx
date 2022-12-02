import React from 'react'
import { TodoItem } from '../models/todo'

export default function TodoList({ data, deleteTodo }: { data: TodoItem[], deleteTodo: (id: number) => void }) {
  return (
    <div>
      {
        data.map(item => {
          return (
            <div key={item.id}>
              <input type="checkbox" checked={item.completed} onChange={() => { }} />
              <span>{item.text}</span>
              <button onClick={() => {
                deleteTodo(item.id)
              }}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}
