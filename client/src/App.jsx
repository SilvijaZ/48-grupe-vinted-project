import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BasicLayout } from "./layout/BasicLayout";
import { Page404 } from "./pages/Page404";
import { PageHome } from "./pages/PageHome";
// import { PagePramogos } from "./components/pages/PagePramogos";
// import { PageGyvunams } from "./components/pages/PageGyvunams";
// import { PagePramogosItem } from "./components/pramogos-item-list/PagePramogosItem";
// import { PageVaizdoZaidimai } from "./components/pamogos-vaizdozaidimai/PageVaizdoZaidimai";
// import { PageKnygos } from "./components/pramogos-knygos/PageKnygos";
// import { PageKnygosItem } from "./components/pramogos-knygos/PageKnygosItem";
// import { PageZaidimai } from "./components/pramogos-zaidimai/PageZaidimai";
// import { PageZaidimaiItem } from "./components/pramogos-zaidimai/PageZaidimaiItem";
// import { PageMuzika } from "./components/pramogos-muzika/PageMuzika";
// import { PageMuzikosItem } from "./components/pramogos-muzika/PageMuzikosItem";
import { ContextWrapper } from "./context/GlobalContext";
import { PageRegister } from "./pages/register/PageRegister";
import { PageLogin } from "./pages/register/PageLogin";
import { PageAccount } from "./pages/account/PageAccount";
import { PageShopCart } from "./pages/shop-cart/PageShopCart";
import { PageMyItemList } from "./pages/my-item-list/PageMyItemList";
import { PageMyItemCreate } from "./pages/my-item-list/PageMyItemCreate";
import { PageItemListing } from "./pages/items/PageItemListing";
import { PageAbout } from "./pages/about/PageAbout";
import { PageMyItemEdit } from "./pages/my-item-list/PageMyItemEdit";
import { AccountLayout } from "./layout/AccountLayout";
import { PageItemListingInner } from "./pages/items/PageItemListingInner";

 
function App() {
  return (
    <ContextWrapper>
        <BrowserRouter>
          <Routes>
            <Route Component={BasicLayout}>
              <Route index path='/' element={<PageHome />} />
              <Route path='/item-list' element={<PageItemListing />} />
              <Route path='/item-list/:itemId' element={<PageItemListingInner />} />
              <Route path='/about' element={<PageAbout />} />
            </Route>

            <Route Component={BasicLayout}>
              <Route path='/register' element={<PageRegister />} />
              <Route path='/login' element={<PageLogin />} />
            </Route>


            <Route Component={AccountLayout}>
              <Route path="/account" element={<PageAccount />} />
              <Route path="/account/my-item-list" element={<PageMyItemList />} />
              <Route path="/account/my-item-list/create" element={<PageMyItemCreate />} />
              <Route path="/account/my-item-list/:itemId/edit" element={<PageMyItemEdit />} />
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