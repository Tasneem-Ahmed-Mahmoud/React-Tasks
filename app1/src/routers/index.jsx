import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import NotFound from '../pages/NotFound/NotFound'
import Portfolio from '../pages/Portfolio/Portfolio'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);

export default router;

