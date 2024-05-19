import { Toaster } from 'react-hot-toast';
import { AppRouter } from './common/routes/AppRouter';

export const App = () => {
  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
};
