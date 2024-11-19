import React, { FormEvent, useState } from 'react';

type NewReminderProps = {
    onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps) {
    const [title, setTitle] = useState('');

    const addReminder = (e: FormEvent) => {
        e.preventDefault();
        if (!title) return;
        onAddReminder(title);
        setTitle('');
    }

    return (
        <form className='form-control' onSubmit={(e) => addReminder(e)}>
            <label htmlFor='new-reminder-input' className='form-control-input mx-3'>New Reminder:</label>
            <input id='new-reminder-input' value={title} onChange={(e) => setTitle(e.target.value)} ></input>
            <button type='submit' className='btn btn-primary mx-3 rounded-pill'>Add</button>
        </form>
    );
}

export default NewReminder;