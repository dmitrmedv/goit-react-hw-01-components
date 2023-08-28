import { Profile } from './components/Profile';
import data from './components/data/user.json';

export const App = () => {
  return <Profile data={data}></Profile>;
};
