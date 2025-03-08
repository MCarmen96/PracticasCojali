import{useEffect, useState } from "react";
import WeaponCard from "./WeaponCard";


interface DamageRange {
  rangeStartMeters: number;
  rangeEndMeters: number;
  headDamage: number;
  bodyDamage: number;
  legDamage: number;
}

interface WeaponStats {
  damageRanges: DamageRange[];
}

interface WeaponData {
  uuid: string;
  displayName: string;
  category: string;
  displayIcon: string;
  weaponStats?: WeaponStats;
}

function Weapons() {
  
  const [weapons, setWeapons] = useState<WeaponData[]>([]);
 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons")
      .then((response) => response.json())
      .then((data) => {
       
        setWeapons(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weapons:", err);
        setError("Error fetching weapons data");
        setLoading(false);
      });
  }, []);

  
  if (loading) return <p>Loading weapons...</p>;
  if (error) return <p>{error}</p>;

  
  return (
    <div className="weapons-container">
      {weapons.map((weapon) => (
        <WeaponCard
          key={weapon.uuid}
          displayName={weapon.displayName}
          displayIcon={weapon.displayIcon}
          category={weapon.category}
          damageRanges={weapon.weaponStats?.damageRanges}
        />
      ))}
    </div>
  );
}

export default Weapons;
