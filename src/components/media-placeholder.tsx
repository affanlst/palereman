import { Icon } from "@/components/icon";

export function MediaPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`media-placeholder ${className}`} role="img" aria-label={`${label}. Foto asli sedang disiapkan.`}>
      <Icon name="photo" />
      <span>{label}</span>
      <small>Foto asli sedang disiapkan</small>
    </div>
  );
}
