import { SiteShell } from "@/components/SiteShell";
import { IdentityStatement } from "@/components/IdentityStatement";
import { PrimaryLinks } from "@/components/PrimaryLinks";
import { Principles } from "@/components/Principles";

export default function HomePage() {
  return (
    <SiteShell>
      <div className="pt-14 sm:pt-20">
        <IdentityStatement />

        <div className="mt-14 sm:mt-16">
          <PrimaryLinks />
        </div>

        <div className="mt-14 sm:mt-16">
          <Principles />
        </div>
      </div>
    </SiteShell>
  );
}
