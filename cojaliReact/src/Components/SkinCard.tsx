import React from 'react';


interface SkinCardProps {
  displayName: string;
  displayIcon: string;
}

function SkinCard({ displayName, displayIcon }: SkinCardProps) {
  return (
    <div className="skin-card">
      
      <img src={displayIcon} alt={displayName} className="skin-image" />
      
      <h2>{displayName}</h2>
    </div>
  );
}

export default SkinCard;
