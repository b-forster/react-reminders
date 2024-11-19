import React, { useEffect, useState } from 'react';
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminder from './services/reminder';
import NewReminder from './components/NewReminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const response = await reminder.getReminders();
    setReminders(response);
  }

  const handleDelete = async (id: number) => {
    await reminder.deleteReminder(id);
    setReminders(prev => prev.filter(item => item.id !== id));
  }

  const handleAdd = async (title: string) => {
    const newReminder = await reminder.addReminder(title);
    setReminders(prev => [...prev, newReminder])
  }

  return (
    <div>
      <NewReminder onAddReminder={handleAdd} />
      <ReminderList list={reminders.slice().reverse()} onRemoveItem={handleDelete} />
    </div>
  );
}

export default App;