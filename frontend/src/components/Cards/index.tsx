import { useContext, useEffect, useRef } from 'react';

import { CharactersContext, CharactersContextData } from '../../providers/Characters';
import { Card } from './Card';

export function Cards() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const { characters, addPage } = useContext(CharactersContext) as CharactersContextData;

  useEffect(() => {
    const observer = new IntersectionObserver((entities) => {
      if (entities.some((target) => target.isIntersecting)) addPage();
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center pt-28">
      {characters?.map((character, index) => (
        <Card key={index} character={character} />
      ))}
      <div ref={loaderRef} />
    </div>
  );
}
