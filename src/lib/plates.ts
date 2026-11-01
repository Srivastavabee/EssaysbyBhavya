export interface Plate {
  slug: string;
  title: string;
  src: string;
  alt: string;
  caption: string;
  essay?: { slug: string; title: string };
}

// Standalone figures, shown as "plates" — add new ones to the top.
export const plates: Plate[] = [
  {
    slug: 'one-population-two-literatures',
    title: 'One Population, Two Literatures',
    src: '/migration-split.png',
    alt: 'Diagram showing one ancestral steppe population branching into the Rigveda and Beowulf traditions',
    caption: 'One ancestral population, two literary civilizations, no memory of each other.',
    essay: { slug: 'what-the-blood-and-the-verse-remember', title: 'What the Blood and the Verse Remember' },
  },
  {
    slug: 'three-theories-of-a-person',
    title: 'Three Theories of a Person',
    src: '/three-theories.png',
    alt: 'Comparison of three ancient Indian theories of heredity: Ayurvedic, Varna, and Vedantic',
    caption: 'Three competing theories of what determines a person, argued within the same civilization.',
    essay: { slug: 'what-the-blood-and-the-verse-remember', title: 'What the Blood and the Verse Remember' },
  },
];
