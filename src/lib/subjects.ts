export interface Subject {
  slug: string;
  name: string;
  descriptor: string;
}

export const subjects: Subject[] = [
  {
    slug: 'biology',
    name: 'Biology',
    descriptor: 'Life, cells, evolution, systems.',
  },
  {
    slug: 'literature',
    name: 'Literature',
    descriptor: 'Stories, language, memory.',
  },
  {
    slug: 'religion',
    name: 'Religion',
    descriptor: 'Belief, ritual, doubt.',
  },
  {
    slug: 'culture',
    name: 'Culture',
    descriptor: 'Custom, inheritance, meaning.',
  },
  {
    slug: 'humanism',
    name: 'Humanism',
    descriptor: 'The questions between them.',
  },
];

export function subjectSlugFromTag(tag: string): string {
  return tag.trim().toLowerCase().replace(/\s+/g, '-');
}

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}
