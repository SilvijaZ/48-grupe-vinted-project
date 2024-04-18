import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasicLayout } from "./components/layout/BasicLayout";
import { Page404 } from "./components/pages/Page404";
import { PageHome } from "./components/pages/PageHome";
import { PagePramogos } from "./components/pages/PagePramogos";
import { PageGyvunams } from "./components/pages/PageGyvunams";
import { PagePramogosItem } from "./components/pramogos-item-list/PagePramogosItem";
import { PageVaizdoZaidimai } from "./components/pamogos-vaizdozaidimai/PageVaizdoZaidimai";
import { PageVaizdoZaidimaiItem } from "./components/pamogos-vaizdozaidimai/PageVaizdoZaidimaiItem";
import { PageKnygos } from "./components/pramogos-knygos/PageKnygos";
import { PageKnygosItem } from "./components/pramogos-knygos/PageKnygosItem";
import { PageZaidimai } from "./components/pramogos-zaidimai/PageZaidimai";
import { PageZaidimaiItem } from "./components/pramogos-zaidimai/PageZaidimaiItem";
import { PageMuzika } from "./components/pramogos-muzika/PageMuzika";
import { PageMuzikosItem } from "./components/pramogos-muzika/PageMuzikosItem";
import { PageGyvunamsItem } from "./components/gyvunams-item-list/PageGyvunamsItem";
import { ContextWrapper } from "./context/GlobalContext";

 
function App() {
  return (
    <ContextWrapper>
        <BrowserRouter>
          <Routes>
            <Route Component={BasicLayout}>
              <Route index path='/' element={<PageHome />} />
              {/* <Route path='/moterims' element={<></>} />
              <Route path='/vyrams' element={<></>} />
              <Route path='/vaikams' element={<></>} />
              <Route path='/namams' element={<></>} /> */}
              <Route path='/pramogos' element={<PagePramogos />} />
              <Route path='/pramogos/:id' element={<PagePramogosItem />} />
              <Route path='/pramogos/vaizdo-zaidimai' element={<PageVaizdoZaidimai />} />
              <Route path='/pramogos/vaizdo-zaidimai/:id' element={<PageVaizdoZaidimaiItem />} />
              <Route path='/pramogos/zaidimai' element={<PageZaidimai />} />
              <Route path='/pramogos/zaidimai/:id' element={<PageZaidimaiItem />} />
              <Route path='/pramogos/muzika' element={<PageMuzika />} />
              <Route path='/pramogos/muzika/:id' element={<PageMuzikosItem />} />
              <Route path='/pramogos/knygos' element={<PageKnygos />} />
              <Route path='/pramogos/knygos/:id' element={<PageKnygosItem />} />

              <Route path='/gyvunams' element={<PageGyvunams />} />
              <Route path='/gyvunams/:id' element={<PageGyvunamsItem />} />
              <Route path='/gyvunams/sunys' element={<PageGyvunamsItem />} />
              <Route path='/gyvunams/sunys/:id' element={<PageGyvunamsItem />} />
              <Route path='/gyvunams/kates' element={<PageGyvunamsItem />} />
              <Route path='/gyvunams/kates/:id' element={<PageGyvunamsItem />} />
              {/* <Route path='/apie-mus' element={<></>} />
              <Route path='/musu-platforma' element={<></>} /> */}
              <Route path='*' element={<Page404 />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </ContextWrapper>
  );
}
 
export default App;