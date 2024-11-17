import { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import reminderService from './services/reminder';
import NewReminder from './components/NewReminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  }

  const addReminder = async (title: string) => {
    const reminder = await reminderService.addReminder(title);
    setReminders(prev => [...prev, reminder]);
  }

  const removeReminder = async (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  }

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList
        items={reminders}
        onRemoveReminder={removeReminder}
      />
    </div>
  );
}

export default App;
