import { HomePage } from '@/modules/price-prowler/pages/HomePage/HomePage';
import { SearchPage } from '@/modules/price-prowler/pages/SearchPage/SearchPage';
import { TrackingPage } from '@/modules/price-prowler/pages/TrackingPage/TrackingPage';
import { Header } from '@/modules/ui/components/Header/Header';
import { Route, Routes } from 'react-router';

export const PriceProwerRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/tracking' element={<TrackingPage />} />
      </Routes>
    </>
  );
};
