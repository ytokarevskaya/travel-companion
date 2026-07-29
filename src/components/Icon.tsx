export type IconName =
  | "book"
  | "calendar"
  | "camera"
  | "compass"
  | "map"
  | "plus"
  | "sparkles"
  | "star"
  | "users";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

const paths: Record<IconName, React.ReactNode> = {
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v15H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v15h4.5a2.5 2.5 0 0 1 2.5 2.5z" /></>,
  calendar: <><rect width="18" height="17" x="3" y="4" rx="2" /><path d="M16 2v4M8 2v4M3 9h18" /></>,
  camera: <><path d="M14.5 4 16 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1.5-3z" /><circle cx="12" cy="13" r="3" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m16 8-2.3 5.7L8 16l2.3-5.7z" /></>,
  map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15" /></>,
  plus: <><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></>,
  sparkles: <><path d="m12 3-1.2 3.3L7.5 7.5l3.3 1.2L12 12l1.2-3.3 3.3-1.2-3.3-1.2zM18 14l-.8 2.2L15 17l2.2.8L18 20l.8-2.2L21 17l-2.2-.8zM5 12l-.7 1.8-1.8.7 1.8.7L5 17l.7-1.8 1.8-.7-1.8-.7z" /></>,
  star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
  users: <><path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 20v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
};

export function Icon({ name, size = 20, className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" height={size} viewBox="0 0 24 24" width={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
      {paths[name]}
    </svg>
  );
}
