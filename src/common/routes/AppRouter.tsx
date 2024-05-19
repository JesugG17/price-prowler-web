import { Routes, Route, Navigate } from 'react-router';
import { PriceProwerRouter } from './PriceProwerRouter';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<PriceProwerRouter />} />
      <Route path='/auth/*' element={<AuthRouter />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
