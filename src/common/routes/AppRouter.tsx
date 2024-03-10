import { Routes, Route, Navigate } from 'react-router';
import { HomePage } from '../../modules/price-prowler/pages/HomePage/HomePage';
import { TrackingPage } from '../../modules/price-prowler/pages/TrackingPage';
import { SearchPage } from '@/modules/price-prowler/pages/SearchPage/SearchPage';
import { Header } from '../../modules/ui/components/Header/Header';


export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/tracking' element={<TrackingPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};
