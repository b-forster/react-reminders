import React, { useState } from 'react';

interface NewReminderProps {
    onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!title) return;
        onAddReminder(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='title' />
            <input
                type='text'
                id='title'
                className='form-control'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type='submit' className='btn btn-primary my-3 rounded-pill'>
                Add Reminder
            </button>
        </form>
    );
}

export default NewReminder;