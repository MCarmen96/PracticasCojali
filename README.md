# Valorant API Web 💻
Una aplicación web desarrollada con React y TypeScript.
En esta web se integran 3 endpoints de la API de Valorant para mostrar información sobre los agentes, armas (con el rango de daño y sus respectivos niveles de categorías) y skins de las armas.
## Enlace en linea
¡Puedes ver la aplicación en funcionamiento en Vercel!
[ValorantApi](https://practicas-cojali.vercel.app/)

## Tecnologías y Herramientas ⚙🛠
- **React**: Biblioteca para construir la interfaz de usuario. 
- **TypeScript**: Añade tipado estático a JavaScript. 
- **Vite**: Herramienta de desarrollo y bundler que mejora la experiencia de desarrollo. 
- **Fetch API**: Para realizar peticiones HTTP a la API de Valorant. 
- **CSS**: Para el diseño y estilos de la aplicación.

## Integración de la API 
El proyecto se conecta a la [API de Valorant](https://valorant-api.com) para obtener datos dinámicos de la siguiente forma: 
- **Agentes:** Se realiza una solicitud a `https://valorant-api.com/v1/agents`, se filtran aquellos agentes que son jugables y se muestran en la aplicación mediante el componente `AgentCard`. 
- **Armas y Skins:** Puedes ampliar esta sección describiendo cómo has integrado la información de las armas, su daño, categorías y las skins disponibles.

## Ejemplo de Código
A continuación, se muestra un fragmento del componente `Agents` donde se realiza la petición a la API y se renderizan los agentes:
``` typeScript
import { useEffect, useState } from "react";
import AgentCard from "./AgentsCard";

interface Agent {
    displayName: string;
    description: string;
    fullPortrait: string;
    isPlayableCharacter: boolean;
}
function Agents() {
    const [agents, setAgents] = useState<Agent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents")
            .then((response) => response.json())
            .then((data) => {

                const playableAgents = data.data.filter(
                    (agent: Agent) => agent.isPlayableCharacter
                );
                setAgents(playableAgents);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching agents:", error);
                setError("Error al cargar los agentes");
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading agents...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="agents-container">
            {agents.map((agent) => (
                <AgentCard
                    key={agent.displayName}
                    displayName={agent.displayName}
                    description={agent.description}
                    fullPortrait={agent.fullPortrait}
                />
            ))}
        </div>
    );
}

export default Agents;

```

## Contacto ☎
Para dudas, sugerencias o colaboración, puedes contactarme a través de:
- **Email:** 
- **GitHub:** [MCarmen96](https://github.com/MCarmen96)
