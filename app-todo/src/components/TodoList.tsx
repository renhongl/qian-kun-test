import React from 'react'
import { TodoItem } from '../models/todo'
import { Checkbox, Card, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import styled from 'styled-components'

export default function TodoList({ data, deleteTodo, toggleTodo }: { data: TodoItem[], deleteTodo: (id: number) => void, toggleTodo: (id: number) => void }) {
  return (
    <Card title='Todo List' style={{ width: 500 }}>
      {
        data.map(item => {
          return (
            <div key={item.id}>
              <Checkbox type="checkbox" checked={item.completed} onChange={() => { toggleTodo(item.id) }}>
                {item.completed ? <Completed>{item.text}</Completed> : <Incompleted>{item.text}</Incompleted>}
              </Checkbox>
              <Button type='primary' ghost danger icon={<DeleteOutlined />} onClick={() => {
                deleteTodo(item.id)
              }}></Button>
            </div>
          )
        })
      }
    </Card>
  )
}

const Completed = styled.div`
  text-decoration: line-through;
  color: gray;
`
const Incompleted = styled.div`
  color: #000;
`