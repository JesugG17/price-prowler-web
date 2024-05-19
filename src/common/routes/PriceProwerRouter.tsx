import { HomePage } from '@/modules/price-prowler/pages/HomePage/HomePage';
import { SearchPage } from '@/modules/price-prowler/pages/SearchPage/SearchPage';
import { TrackingPage } from '@/modules/price-prowler/pages/TrackingPage/TrackingPage';
import { Header } from '@/modules/ui/components/Header/Header';
import { useAuthStore } from '@/store/auth/useAuthStore';
import { Navigate, Route, Routes } from 'react-router';

export const PriceProwerRouter = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
        {isAuthenticated && <Route path='/tracking' element={<TrackingPage />} />}
      </Routes>
    </>
  );
};
