import { Route, Routes } from 'react-router-dom';

import { FormPage } from 'pages/FormPage/FormPage';
import { NotFound } from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FormPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
