import { Deck } from "@/components/deck/Deck";
import { SceneIdentity }        from "@/components/scenes/SceneIdentity";
import { ScenePositioning }     from "@/components/scenes/ScenePositioning";
import { SceneProcess }         from "@/components/scenes/SceneProcess";
import { SceneProjectsIndex }   from "@/components/scenes/SceneProjectsIndex";
import { SceneContact }         from "@/components/scenes/SceneContact";

/**
 * The deck. Five scenes, scroll-snapped on a horizontal rail.
 * The viewport shows adjacent slides at the edges so the homepage behaves
 * like a right-moving editorial carousel rather than a vertical page.
 */
export default function HomePage() {
  return (
    <Deck>
      <SceneIdentity />
      <ScenePositioning />
      <SceneProcess />
      <SceneProjectsIndex />
      <SceneContact />
    </Deck>
  );
}
