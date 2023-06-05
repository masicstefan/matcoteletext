import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';

// Pages imports.
import Home from './pages/Home';
//import About from './pages/About';
import Client from './pages/about/Client';
import Editor from './pages/about/Editor';
import Server from './pages/about/Server';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
// import Novice from './pages/novice/Novice';
import NotFound from './pages/NotFound';
import Novice, { noviceLoader } from './pages/novice/Novice';
import NoviceDetail, { noviceDetailLoader } from './pages/novice/NoviceDetail';
import NoviceError from './pages/novice/NoviceError';
import Novica, { novicaAction } from './pages/novice/Novica';
import KontaktList from './pages/admin/KontaktList';
import Mmc, { mmcLoader} from './pages/mmc/Mmc'

// Layouts imports.
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import NoviceLayout from './layouts/NoviceLayout';
import AboutLayout from './layouts/AboutLayout';
import AdminLayout from './layouts/AdminLayout';
import MmcLayout from './layouts/MmcLayout';

// Za podatke potrebujemo JSON Server:
// >npm install -g json-server
// >json-server data/db.json -p 4000 -w

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<AboutLayout />}>
        <Route path="client" element={<Client />}/>
        <Route path="editor" element={<Editor />}/>
        <Route path="server" element={<Server />}/>
     </Route>
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element= {<Faq />} />
        <Route path="contact" element= {<Contact />} action={contactAction}/>
      </Route>
      <Route path="novice" element={<NoviceLayout />} errorElement={<NoviceError />}>
        <Route index element={<Novice />} loader={noviceLoader} />
        <Route path=":stevilkanovice" element={<NoviceDetail />} loader={noviceDetailLoader} />  
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route path="novica" element= {<Novica />} action={novicaAction}/>
        <Route path="kontaktlist" element= {<KontaktList />} action={novicaAction}/>
      </Route>
      <Route path="mmc" element={<MmcLayout />} errorElement={<NoviceError />}>
        <Route index element={<Mmc />} loader={mmcLoader} />
      </Route>

      <Route path="*" element={<NotFound />}/>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
