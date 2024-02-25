import { Routes, Route } from 'react-router';
import { HomePage } from '../../modules/price-prowler/pages/HomePage';
import { TrackingPage } from '../../modules/price-prowler/pages/TrackingPage';
import { SearchPage } from '@/modules/price-prowler/pages/SearchPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/tracking' element={<TrackingPage />} />
    </Routes>
  );
};
