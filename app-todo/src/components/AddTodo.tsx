import { Button, Card, Input } from 'antd';
import React, { Dispatch, SetStateAction, useState } from 'react'

export default function AddTodo({ addTodo }: { addTodo: (text: string) => void }) {
    const [data, setData] = useState('');
    return (
        <Card title='Add Todo'>
            <Input.Group compact>
                <Input style={{ width: 'calc(100% - 100px)' }} type="text" value={data} onChange={(e) => setData(e.target.value)} />
                <Button type="primary" onClick={() => {
                    addTodo(data);
                    setData('');
                }}>Add</Button>
            </Input.Group>
        </Card>
    )
}
