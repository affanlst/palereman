import Image from "next/image";

export function BrandMark({ priority = false }: { priority?: boolean }) {
  return (
    <span className="brand-mark" aria-hidden="true">
      <Image src="/images/gunungan-palereman-transparent.png" alt="" width={44} height={61} sizes="44px" priority={priority} />
    </span>
  );
}
