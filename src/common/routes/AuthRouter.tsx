import { Navigate, Route, Routes } from 'react-router';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path='/auth/login' />
      <Route path='/auth/register' />
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
