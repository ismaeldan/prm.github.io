import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { LayoutWithHeader } from './LayoutWithHeader';

export function MainRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWithHeader />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};