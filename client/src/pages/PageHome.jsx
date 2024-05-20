import { NewestItemsList } from '../components/item-list/NewestItemsList';
import { Hero } from "../components/hero/Hero";

export function PageHome(){
    return (
        <>
          <Hero />
          <NewestItemsList />
        </>
    );
}