import React, { ChangeEvent } from 'react';
import Reminder from '../models/reminder';

type ReminderListProps = {
    list: Reminder[]
    onRemoveItem: (id: number) => void;
}

function ReminderList({ list, onRemoveItem }: ReminderListProps): JSX.Element {
    return (
        <ul className='list-group'>
            {list.map(item =>
                <li className='list-group-item' key={item.id}>
                    {item.title}
                    <button onClick={() => onRemoveItem(item.id)} className='btn btn-outline-danger mx-3 rounded-pill' >
                        Delete
                    </button>
                </li>
            )}
        </ul>
    );
}

export default ReminderList;