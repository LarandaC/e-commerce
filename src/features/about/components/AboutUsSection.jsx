import { CONTAINER_SECTION, SECTION_WITH_BG } from "../../../utils/classNames";
import { AboutHeader } from "./AboutHeader";
import { AboutStory } from "./AboutStory";
import { AboutValues } from "./AboutValues";
import { AboutStats } from "./AboutStats";
import { AboutCTA } from "./AboutCTA";

export const AboutUsSection = () => {
  return (
    <section className={SECTION_WITH_BG}>
      <div className={`${CONTAINER_SECTION} space-y-10`}>
        <AboutHeader />
        <AboutStory />
        <AboutValues />
        <AboutStats />
        <AboutCTA />
      </div>
    </section>
  );
};
