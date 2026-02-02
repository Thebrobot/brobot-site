interface AgentBroskiIconProps {
  className?: string;
  animate?: boolean;
  size?: number;
}

export default function AgentBroskiIcon({ 
  className = "", 
  animate = true,
  size = 24 
}: AgentBroskiIconProps) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      <img 
        src="/images/agent-broski-logo.png" 
        alt="Agent Broski" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
