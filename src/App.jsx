import { Routes, Route } from 'react-router-dom';
import AppShell from './components/Layout/AppShell';
import { Landing } from './routes/landing';
import { Explore } from './routes/explore';
import { Profile } from './routes/profile';
import { Message } from './routes/message';

export function App() {
  return (
    <AppShell>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/message' element={<Message />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </AppShell>
  );
}
