export default function CircuitBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-5 opacity-60">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glowBlue">
            <feGaussianBlur stdDeviation="0.3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowGold">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Lines converging to badge area (top center ~15% height) */}
        <path
          d="M 10 10 L 48 12"
          className="svg-line-blue"
        />
        <path
          d="M 90 10 L 52 12"
          className="svg-line-electric"
        />

        {/* Badge node (Expert en reprogrammation moteur) */}
        <circle cx="50" cy="12" r="0.6" className="svg-node-gold">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Lines from badge to title "PUISSANCE" (~35% height) */}
        <path
          d="M 48 12 L 45 35"
          className="svg-line-blue"
        />
        <path
          d="M 52 12 L 55 35"
          className="svg-line-electric"
        />

        {/* Title "PUISSANCE" node (center of title) */}
        <circle cx="50" cy="35" r="0.8" className="svg-node-gold">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
        </circle>

        {/* Lines from title to CTA buttons (~60% height) */}
        <path
          d="M 50 35 L 38 60"
          className="svg-line-blue"
        />
        <path
          d="M 50 35 L 62 60"
          className="svg-line-electric"
        />

        {/* CTA button nodes */}
        <circle cx="38" cy="60" r="0.7" className="svg-node-gold">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="62" cy="60" r="0.7" className="svg-node-gold">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.6s" repeatCount="indefinite" />
        </circle>

        {/* Lines from buttons to stats area (~85% height) */}
        <path
          d="M 38 60 L 25 85"
          className="svg-line-blue"
        />
        <path
          d="M 38 60 L 50 85"
          className="svg-line-electric"
        />
        <path
          d="M 62 60 L 50 85"
          className="svg-line-blue"
        />
        <path
          d="M 62 60 L 75 85"
          className="svg-line-electric"
        />

        {/* Stats area nodes (3 stats at bottom) */}
        <circle cx="25" cy="85" r="0.6" className="svg-node-blue">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="85" r="0.6" className="svg-node-electric">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="85" r="0.6" className="svg-node-blue">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* Horizontal line connecting stats */}
        <path
          d="M 25 85 L 75 85"
          className="svg-line-electric"
        />

        {/* Side decorative circuits (along car sides) */}
        <path
          d="M 5 30 L 15 30 L 15 70"
          className="svg-line-blue"
        />
        <path
          d="M 95 30 L 85 30 L 85 70"
          className="svg-line-electric"
        />

        {/* Side nodes */}
        <circle cx="15" cy="30" r="0.4" className="svg-node-blue-small" />
        <circle cx="85" cy="30" r="0.4" className="svg-node-electric-small" />
        <circle cx="15" cy="70" r="0.4" className="svg-node-blue-small" />
        <circle cx="85" cy="70" r="0.4" className="svg-node-electric-small" />

        {/* Intermediate connection nodes */}
        <circle cx="45" cy="35" r="0.3" className="svg-node-blue-small" />
        <circle cx="55" cy="35" r="0.3" className="svg-node-electric-small" />
      </svg>
    </div>
  );
}
