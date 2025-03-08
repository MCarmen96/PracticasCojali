interface AgentProps {
    displayName: string;
    description: string;
    fullPortrait: string;
}

function AgentCard({ displayName, description, fullPortrait }: AgentProps) {
    return (
        <div className="agent-card">
            <img src={fullPortrait} alt={displayName} />
            <h2>{displayName}</h2>
            <p>{description}</p>
        </div>
    );
}

export default AgentCard;
