import React, { Dispatch, SetStateAction, useState } from 'react'

export default function AddTodo({ addTodo }: { addTodo: (text: string) => void }) {
    const [data, setData] = useState('');
    return (
        <div>
            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            <button onClick={() => {
                addTodo(data);
                setData('');
            }}>Add</button>
        </div>
    )
}
