import React, { useEffect, useState } from 'react';
import SkinCard from './SkinCard';


interface Skin {
  uuid: string;
  displayName: string;
  displayIcon: string;
 
}

function WeaponsSkins() {
  
  const [skins, setSkins] = useState<Skin[]>([]);
  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons/skins")
      .then((response) => response.json())
      .then((data) => {
        
        setSkins(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weapon skins:", err);
        setError("Error al cargar las skins de las armas");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading weapons skins....</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="skins-container">
      {skins.map((skin) => (
        <SkinCard
          key={skin.uuid}
          displayName={skin.displayName}
          displayIcon={skin.displayIcon}
        />
      ))}
    </div>
  );
}

export default WeaponsSkins;
