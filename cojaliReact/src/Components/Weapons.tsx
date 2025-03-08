import React, { useEffect, useState } from "react";
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
  // Estado para almacenar la lista de armas
  const [weapons, setWeapons] = useState<WeaponData[]>([]);
  // Estado para manejar la carga (loading) y los errores
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons")
      .then((response) => response.json())
      .then((data) => {
        // Guardamos los datos de las armas en el estado
        setWeapons(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching weapons:", err);
        setError("Error fetching weapons data");
        setLoading(false);
      });
  }, []);

  // Manejamos los estados de carga y error
  if (loading) return <p>Loading weapons...</p>;
  if (error) return <p>{error}</p>;

  // Renderizamos una lista de WeaponCard, una por cada arma
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
