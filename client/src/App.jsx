import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasicLayout } from "./components/layout/BasicLayout";
import { LayoutWithHero } from "./components/layout/LayoutWithHero";
import { Page404 } from "./components/pages/Page404";
import { PageHome } from "./components/pages/PageHome";
import { PagePramogos } from "./components/pages/PagePramogos";
import { PageGyvunams } from "./components/pages/PageGyvunams";
import { PagePramogosItem } from "./components/pramogos-item-list/PagePramogosItem";
import { PageVaizdoZaidimai } from "./components/pamogos-vaizdozaidimai/PageVaizdoZaidimai";
import { PageKnygos } from "./components/pramogos-knygos/PageKnygos";
import { PageKnygosItem } from "./components/pramogos-knygos/PageKnygosItem";
import { PageZaidimai } from "./components/pramogos-zaidimai/PageZaidimai";
import { PageZaidimaiItem } from "./components/pramogos-zaidimai/PageZaidimaiItem";
import { PageMuzika } from "./components/pramogos-muzika/PageMuzika";
import { PageMuzikosItem } from "./components/pramogos-muzika/PageMuzikosItem";
import { PageGyvunamsItem } from "./components/gyvunams-item-list/PageGyvunamsItem";
import { ContextWrapper } from "./content/GlobalContext";
import { PageRegister } from "./components/pages/registracija/PageRegister";
import { PageLogin } from "./components/pages/registracija/PageLogin";
import { PageAccount } from "./components/pages/account/PageAccount";
import { LayoutPages } from "./components/layout/LayoutPages";
import { PageVaizdoZaidimaiItem } from "./components/pamogos-vaizdozaidimai/PageVaizdoZaidimaiItem";
import { PageShopCart } from "./components/shop-cart/PageShopCart";
import { PageMyItemList } from "./components/pages/my-items-list/PageMyItemList";
import { PageMyItemCreate } from "./components/pages/my-items-list/PageMyItemCreate";

 
function App() {
  return (
    <ContextWrapper>
        <BrowserRouter>
          <Routes>
            <Route Component={LayoutWithHero}>
              <Route index path='/' element={<PageHome />} />
            </Route>
            
            <Route Component={BasicLayout}>
              {/* <Route path='/moterims' element={<></>} />
              <Route path='/vyrams' element={<></>} />
              <Route path='/vaikams' element={<></>} />
              <Route path='/namams' element={<></>} /> */}
              <Route path='/pramogos' element={<PagePramogos />} />
              <Route path='/pramogos/:prekėId' element={<PagePramogosItem />} />
              <Route path='/gyvunams' element={<PageGyvunams />} />
              <Route path='/gyvunams/:id' element={<PageGyvunamsItem />} />
            </Route>

            <Route Component={LayoutPages}>
              <Route path='/pramogos/vaizdo-zaidimai' element={<PageVaizdoZaidimai />} />
              <Route path='/pramogos/vaizdo-zaidimai/:id' element={<PageVaizdoZaidimaiItem />} />
              <Route path='/pramogos/zaidimai' element={<PageZaidimai />} />
              <Route path='/pramogos/zaidimai/:id' element={<PageZaidimaiItem />} />
              <Route path='/pramogos/muzika' element={<PageMuzika />} />
              <Route path='/pramogos/muzika/:id' element={<PageMuzikosItem />} />
              <Route path='/pramogos/knygos' element={<PageKnygos />} />
              <Route path='/pramogos/knygos/:id' element={<PageKnygosItem />} />
              
              <Route path='/gyvunams/sunys' element={<PageGyvunamsItem />} />
              <Route path='/gyvunams/sunys/:id' element={<PageGyvunamsItem />} />
              <Route path='/gyvunams/kates' element={<PageGyvunamsItem />} />
              <Route path='/gyvunams/kates/:id' element={<PageGyvunamsItem />} />
              {/* <Route path='/apie-mus' element={<></>} />
              <Route path='/musu-platforma' element={<></>} /> */}
             </Route>
           

            <Route Component={BasicLayout}>
              <Route path='/register' element={<PageRegister />} />
              <Route path='/login' element={<PageLogin />} />
              <Route path="/account" element={<PageAccount />} />
              <Route path="/account/my-items" element={<PageMyItemList />} />
              <Route path="/account/my-items/create" element={<PageMyItemCreate />} />
              <Route path="/account/my-items/remove" element={<></>} />
              <Route path='/shop-cart' element={<PageShopCart />} />
            </Route>

            <Route Component={BasicLayout}>
              <Route path='*' element={<Page404 />} />
            </Route>
              
          </Routes>
        </BrowserRouter>
      </ContextWrapper>
  );
}
 
export default App;