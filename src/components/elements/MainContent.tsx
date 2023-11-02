import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import Cakes from '../../pages/Cakes';
import Pastries from '../../pages/Pastries';
import Bread from '../../pages/Bread';
import Contact from '../../pages/Contact';
import NotFound from '../../pages/errors/NotFound';

import { paths } from '../../const/paths';

const MainContent = () => (
  <Routes>
  <Route path={paths.home} element={<Home />} />
  <Route path={paths.cakes} element={<Cakes />} />
  <Route path={paths.pastries} element={<Pastries />} />
  <Route path={paths.bread} element={<Bread />} />
  <Route path={paths.contact} element={<Contact />} />
  <Route path='*' element={<NotFound />} />
</Routes>
)

export default MainContent;
