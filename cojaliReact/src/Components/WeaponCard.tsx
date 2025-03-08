
interface DamageRange {
  rangeStartMeters: number;
  rangeEndMeters: number;
  headDamage: number;
  bodyDamage: number;
  legDamage: number;
}


interface WeaponCardProps {
  displayName: string;
  displayIcon: string;
  category: string;
  damageRanges?: DamageRange[];
}

function WeaponCard({ displayName, displayIcon, category, damageRanges }: WeaponCardProps) {
 
  const finalCategory = category
    ? category.replace("EEquippableCategory::", "")
    : "Category Not available";

  return (
    <div className="weapon-card">
    
      <img src={displayIcon} alt={displayName} />
      
      
      <h2>{displayName}</h2>
      
     
      <p>
        <strong>Category:</strong> {finalCategory}
      </p>

      {/* Información de daño */}
      {damageRanges && damageRanges.length > 0 ? (
        damageRanges.map((range, index) => (
          <div key={index} className="damage-info">
            <p>
              <strong>Range:</strong> {range.rangeStartMeters} - {range.rangeEndMeters}m
            </p>
            <p>
              <strong>Head Damage:</strong> {range.headDamage}
            </p>
            <p>
              <strong>Body Damage:</strong> {range.bodyDamage}
            </p>
            <p>
              <strong>Leg Damage:</strong> {range.legDamage}
            </p>
          </div>
        ))
      ) : (
        <p className="damage-info">
          <strong>Damage info:</strong> Not available
        </p>
      )}
    </div>
  );
}

export default WeaponCard;
