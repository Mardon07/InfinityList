import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import itemStore from "../store/ItemStore";
import RepositoryCard from "./RepositoryCard";

// const RepositoryCard = React.lazy(() => import('./RepositoryCard'));

const ItemList: React.FC = observer(() => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    itemStore.fetchItems();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!loaderRef.current) return;

      const { top } = loaderRef.current.getBoundingClientRect();
      const { innerHeight } = window;

      if (top <= innerHeight && !itemStore.loading) {
        itemStore.fetchItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
      {itemStore.items.map(item => (
        <RepositoryCard key={item.full_name} repository={item} />
      ))}
      <div ref={loaderRef} style={{ height: '50px', margin: '20px 0', textAlign: 'center' }}>
        {itemStore.loading && <h4>Загрузка...</h4>}
      </div>
    </div>
  );
});

export default ItemList;
