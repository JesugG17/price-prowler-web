import { Routes, Route } from 'react-router';
import { HomePage } from '../../modules/price-prowler/pages/HomePage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
};
