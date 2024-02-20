import { Routes, Route } from 'react-router';
import { HomePage } from '../../modules/price-prowler/pages/HomePage';
import { TrackingPage } from '../../modules/price-prowler/pages/TrackingPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/tracking' element={<TrackingPage />} />
    </Routes>
  );
};
