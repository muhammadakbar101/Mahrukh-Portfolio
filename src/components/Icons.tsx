import React, { useId } from 'react';

export const LinkedInBadge: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <span className="platform">
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M7.1 9.4H4.6V19h2.5V9.4ZM5.9 5a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Zm13.5 8.7c0-2.6-1.4-4.5-4-4.5-1.3 0-2.2.7-2.6 1.4V9.4h-2.4V19h2.5v-5c0-1.3.3-2.5 1.9-2.5s1.7 1.5 1.7 2.6V19h2.5v-5.3Z"
      />
    </svg>
    <span>LinkedIn</span>
  </span>
);

export const InstagramBadge: React.FC<{ size?: number }> = ({ size = 16 }) => {
  const gradId = useId();
  return (
    <span className="platform">
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <radialGradient id={gradId} cx="30%" cy="107%" r="150%">
            <stop offset="0" stopColor="#fdf497" />
            <stop offset="0.05" stopColor="#fdf497" />
            <stop offset="0.45" stopColor="#fd5949" />
            <stop offset="0.6" stopColor="#d6249f" />
            <stop offset="0.9" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill={`url(#${gradId})`} />
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.3" fill="none" stroke="#fff" strokeWidth="1.8" />
        <circle cx="16.4" cy="7.6" r="1.05" fill="#fff" />
      </svg>
      <span>Instagram</span>
    </span>
  );
};

export const FacebookBadge: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <span className="platform">
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#1877F2" />
      <path
        fill="#fff"
        d="M16.5 12h-2.5v8h-3.3v-8h-1.6V9.2h1.6V7.4c0-2.2 1.3-3.4 3.3-3.4 1 0 1.8.1 2 .1v2.4h-1.4c-1.1 0-1.4.5-1.4 1.3v1.4h2.8l-.5 2.8z"
      />
    </svg>
    <span>Facebook</span>
  </span>
);

export const MetaBadge: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <span className="platform">
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0081FB" />
      <path
        fill="#fff"
        d="M12 9.5c1.2-1.6 2.5-2.5 4-2.5 2.2 0 4 1.8 4 4.5 0 3.2-2.3 5.5-5.2 5.5-1.5 0-2.6-.7-3.8-2.2-1.2 1.5-2.3 2.2-3.8 2.2-2.9 0-5.2-2.3-5.2-5.5 0-2.7 1.8-4.5 4-4.5 1.5 0 2.8.9 4 2.5zm-4.2 5.5c1.8 0 3.2-1.7 3.2-3.8 0-1.5-.9-2.7-2.3-2.7-1.3 0-2.4 1.1-2.4 2.7 0 2.1 1.5 3.8 1.5 3.8zm8.4 0c1.8 0 3.2-1.7 3.2-3.8 0-1.6-1.1-2.7-2.4-2.7-1.4 0-2.3 1.2-2.3 2.7 0 2.1 1.5 3.8 1.5 3.8z"
      />
    </svg>
    <span>Meta Ads</span>
  </span>
);

export const TikTokBadge: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <span className="platform">
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#010101" />
      <path
        fill="#ffffff"
        d="M16.6 5.82s.51.5 1.4 0c.9-.5 1.5-.7 1.5-.7v3.2s-1.1-.1-2.2-.6c-1.1-.5-1.7-1.1-1.7-1.1v7.6a4.5 4.5 0 1 1-4.5-4.5c.3 0 .7 0 1 .1v3.2a1.8 1.8 0 1 0 1.8 1.8V3h2.7c0 1.2.5 2.1 1.5 2.8z"
      />
    </svg>
    <span>TikTok</span>
  </span>
);

export type PlatformType = 'LinkedIn' | 'Instagram' | 'Facebook' | 'Meta' | 'TikTok';

export const PlatformBadges: React.FC<{
  platforms: PlatformType[];
  size?: number;
}> = ({ platforms, size = 16 }) => {
  const renderBadge = (p: PlatformType) => {
    switch (p) {
      case 'Instagram':
        return <InstagramBadge key={p} size={size} />;
      case 'Facebook':
        return <FacebookBadge key={p} size={size} />;
      case 'Meta':
        return <MetaBadge key={p} size={size} />;
      case 'TikTok':
        return <TikTokBadge key={p} size={size} />;
      case 'LinkedIn':
      default:
        return <LinkedInBadge key={p} size={size} />;
    }
  };

  if (platforms.length > 1) {
    return <span className="platform-group">{platforms.map((p) => renderBadge(p))}</span>;
  }
  return renderBadge(platforms[0] || 'LinkedIn');
};

export const ArrowRightIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'arrow',
  size = 20,
}) => (
  <svg className={className} viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path
      d="M5 12h13M13 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowLeftIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path
      d="M19 12H6M11 6l-6 6 6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDownIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path
      d="M12 5v14M6 13l6 6 6-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowUpIcon: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path
      d="M12 19V6M6 12l6-6 6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const ZoomExpandIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path
      d="M10 4H4v6M14 20h6v-6M4 4l7 7M20 20l-7-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
