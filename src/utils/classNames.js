/**
 * Reusable className constants to maintain consistency across components
 * and follow DRY principles
 */

// Container patterns
export const CONTAINER_BASE = "container mx-auto px-4";
export const CONTAINER_SECTION = "container mx-auto px-4 py-16 relative";

// Section wrappers
export const SECTION_BASE =
  "relative min-h-screen flex items-center justify-center overflow-hidden";
export const SECTION_WITH_BG = "py-16 px-4 md:px-8 bg-background";

// Typography - Headings
export const HEADING =
  "text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-primary";

// Typography - Body text
export const TEXT_BODY = "text-lg text-foreground leading-relaxed font-light";
export const TEXT_BODY_MAX_WIDTH =
  "text-lg text-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light";

// Button base styles (for reference, actual buttons use components)
export const BUTTON_PRIMARY_BASE =
  "group inline-flex items-center justify-center px-6 py-3 bg-linear-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300";
export const BUTTON_SECONDARY_BASE =
  "inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:text-white font-bold rounded-2xl hover:bg-primary transition-all duration-300 transform hover:scale-105";
