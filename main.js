
let agentsApi = ("https://valorant-api.com/v1/agents");

fetch(agentsApi)
    .then(result => result.json())
    .then(data => {
        //visualizamos el json en la consola
        console.log(agentsApi);

        const agents = data.data; // Acceder a la lista de agentes
        const agentsContainer = document.getElementById('agents-container');

        //generar la info en cada tarjeta recorriendo la api
        agents.forEach(agent => {
            // contenedor de la tarjeta
            const card = document.createElement('div');
            card.className = 'agent-card';

            // añadir imagenes
            const agentImage = document.createElement('img');
            agentImage.src = agent.fullPortrait;
            agentImage.alt = agent.displayName;
            card.appendChild(agentImage);

            // añadir nombres
            const agentName = document.createElement('h2');
            agentName.textContent = agent.displayName;
            card.appendChild(agentName);

            //descripcion
            const agentDescription = document.createElement('p');
            agentDescription.textContent = agent.description;
            card.appendChild(agentDescription);

            // añadimos la tarjeta al contenedor principal
            agentsContainer.appendChild(card);

        });

    })
    


//WEAPONS
const weaponsApiUrl = "https://valorant-api.com/v1/weapons";

//obtener los datos de la api
fetch(weaponsApiUrl)
    .then(response => response.json())
    .then(data => {
        const weaponsContainer = document.getElementById("weapons-container");

        data.data.forEach(weapon => {
            const weaponCard = document.createElement("div");
            weaponCard.className = "weapon-card";

            const weaponImg = document.createElement('img');
            weaponImg.src = weapon.displayIcon;
            weaponImg.alt = weapon.displayName;
            weaponCard.appendChild(weaponImg);

            const weaponName = document.createElement('h2');
            weaponName.textContent = weapon.displayName;
            weaponName.className="weapon-category";
            weaponCard.appendChild(weaponName);

            const weaponCategory = document.createElement('p');
            // si tiene catgoria reemplazom el eequipp...para que solo salga la categoria real
                weaponCategory.innerHTML = `<strong>Category:</strong> ${weapon.category 
                    ? weapon.category.replace("EEquippableCategory::", "") 
                    : " Category Not available"}`;
                    weaponCategory.className="weapon-category";
                weaponCard.appendChild(weaponCategory);


                //si el arma tiene estadísticas de daño
                if (weapon.weaponStats && weapon.weaponStats.damageRanges && weapon.weaponStats.damageRanges.length > 0) {
                    weapon.weaponStats.damageRanges.forEach(damage => {
                        const damageInfo = document.createElement('div'); //para agrupar los datos
                        damageInfo.className = "damage-info"; 

                        damageInfo.innerHTML = `
                            <p><strong>Range:</strong> ${damage.rangeStartMeters} - ${damage.rangeEndMeters}m</p>
                            <p><strong>Head Damage:</strong> ${damage.headDamage}</p>
                            <p><strong>Body Damage:</strong> ${damage.bodyDamage}</p>
                            <p><strong>Leg Damage:</strong> ${damage.legDamage}</p>
                        `;

                        weaponCard.appendChild(damageInfo);
                    });
                } else {
                    const noDamageInfo = document.createElement('p');
                    noDamageInfo.innerHTML = "<p><strong>Damage info:</strong> Not available</p>";
                    noDamageInfo.className = "damage-info"; 
                    weaponCard.appendChild(noDamageInfo);
                }

            weaponsContainer.appendChild(weaponCard);


        });
    });






//SKINS WEAPONS skins
const skinsApiUrl = "https://valorant-api.com/v1/weapons/skins";

// Obtener datos de la API
fetch(skinsApiUrl)
    .then(response => response.json())
    .then(data => {
        const skinsContainer = document.getElementById("skins-container");

        data.data.forEach(skin => {
            // Crear la tarjeta de cada skin
            const skinCard = document.createElement("div");
            skinCard.className = "skin-card";

            // Contenido de la tarjeta con imagen y nombre
            skinCard.innerHTML = `
                        <img src="${skin.displayIcon}" alt="${skin.displayName}" class="skin-image">
                        <h2>${skin.displayName}</h2>
                `;

            skinsContainer.appendChild(skinCard);
        });
    });
   

