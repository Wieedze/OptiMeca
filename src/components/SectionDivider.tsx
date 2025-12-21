export default function SectionDivider() {
  return (
    <div className="relative h-24 overflow-hidden">
      {/* Circuit line separator */}
      <svg
        viewBox="0 0 1200 100"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="dividerGlowBlue">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="dividerGlowGold">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main horizontal line */}
        <path
          d="M 0 50 H 1200"
          className="svg-line-electric"
          strokeWidth="1.5"
        />

        {/* Decorative vertical connections */}
        <path
          d="M 300 50 V 20"
          className="svg-line-blue"
        />
        <path
          d="M 600 50 V 20"
          className="svg-line-electric"
        />
        <path
          d="M 900 50 V 20"
          className="svg-line-blue"
        />

        {/* Circuit nodes */}
        <circle cx="300" cy="50" r="4" className="svg-node-blue">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="600" cy="50" r="5" className="svg-node-gold">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="900" cy="50" r="4" className="svg-node-electric">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
        </circle>

        {/* Small decorative nodes */}
        <circle cx="150" cy="50" r="2" className="svg-node-blue-small" />
        <circle cx="450" cy="50" r="2" className="svg-node-electric-small" />
        <circle cx="750" cy="50" r="2" className="svg-node-blue-small" />
        <circle cx="1050" cy="50" r="2" className="svg-node-electric-small" />

        {/* Top connection nodes */}
        <circle cx="300" cy="20" r="3" className="svg-node-blue-small" />
        <circle cx="600" cy="20" r="3" className="svg-node-electric-small" />
        <circle cx="900" cy="20" r="3" className="svg-node-blue-small" />
      </svg>
    </div>
  );
}
