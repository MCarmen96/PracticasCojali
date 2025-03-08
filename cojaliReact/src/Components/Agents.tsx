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
