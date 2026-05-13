import { Deck } from "@/components/deck/Deck";
import { SceneIdentity }        from "@/components/scenes/SceneIdentity";
import { ScenePositioning }     from "@/components/scenes/ScenePositioning";
import { SceneProjectsIndex }   from "@/components/scenes/SceneProjectsIndex";
import { SceneFeaturedProject } from "@/components/scenes/SceneFeaturedProject";
import { SceneProcess }         from "@/components/scenes/SceneProcess";
import { ScenePrinciples }      from "@/components/scenes/ScenePrinciples";
import { SceneContact }         from "@/components/scenes/SceneContact";

/**
 * The deck. Seven scenes, scroll-snapped on a horizontal rail.
 * The viewport shows adjacent slides at the edges so the homepage behaves
 * like a right-moving editorial carousel rather than a vertical page.
 */
export default function HomePage() {
  return (
    <Deck>
      <SceneIdentity />
      <ScenePositioning />
      <SceneProjectsIndex />
      <SceneFeaturedProject />
      <SceneProcess />
      <ScenePrinciples />
      <SceneContact />
    </Deck>
  );
}
