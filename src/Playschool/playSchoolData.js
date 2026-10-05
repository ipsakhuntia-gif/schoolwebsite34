// src/data/playSchoolData.js
// Multi-sensory approach — five ways a child meets the world.
// Deliberately not numbered: these run in parallel, not in sequence.
export const senses = [
  {
    id: "see",
    label: "See",
    title: "Rooms that teach on their own",
    text: "Low shelves, picture walls at a child's eye level, and colour corners that change with the season — so a child reads the room long before they read a word.",
    meta: "Picture reading · Colour & shape corners · Seasonal wall",
    dot: "#ffa726",
    wash: "linear-gradient(180deg, rgba(255,167,38,0) 40%, rgba(255,152,0,0.5) 100%)",
    caption: "Eye-level learning walls",
  },
  {
    id: "hear",
    label: "Hear",
    title: "Rhyme, story and a lot of listening",
    text: "Odia and English rhymes, circle-time stories and simple instruments build the ear for sound, rhythm and early phonics — without a single worksheet.",
    meta: "Circle time · Rhymes in two languages · Music hour",
    dot: "#7c4dbe",
    wash: "linear-gradient(180deg, rgba(124,77,190,0) 40%, rgba(124,77,190,0.5) 100%)",
    caption: "Story circle, every morning",
  },
  {
    id: "touch",
    label: "Touch",
    title: "Hands first, letters later",
    text: "Sand trays, clay, water play and textured cards let small fingers do the thinking. Grip and control come from play, and handwriting follows on its own.",
    meta: "Sand & clay · Texture cards · Water play",
    dot: "#e8635a",
    wash: "linear-gradient(180deg, rgba(232,99,90,0) 40%, rgba(232,99,90,0.46) 100%)",
    caption: "Sand tray writing practice",
  },
  {
    id: "move",
    label: "Move",
    title: "A busy body learns faster",
    text: "Balance beams, action songs and free outdoor play every day. Movement settles a restless child and builds the focus that sitting still never can.",
    meta: "Outdoor hour · Action songs · Balance & climbing",
    dot: "#2e9e8f",
    wash: "linear-gradient(180deg, rgba(46,158,143,0) 40%, rgba(46,158,143,0.46) 100%)",
    caption: "Two hours outdoors, daily",
  },
  {
    id: "make",
    label: "Make",
    title: "Something to carry home",
    text: "Paint, paper, puppets and pretend play. Every child leaves with work of their own — and with the confidence that their idea was worth finishing.",
    meta: "Art studio · Puppet corner · Pretend play",
    dot: "#f06292",
    wash: "linear-gradient(180deg, rgba(240,98,146,0) 40%, rgba(240,98,146,0.46) 100%)",
    caption: "Art studio, open all week",
  },
];

export const highlights = [
  { value: "2–5", label: "Age group" },
  { value: "1:12", label: "Teacher to child" },
  { value: "6", label: "Activity corners" },
  { value: "CCTV", label: "Monitored campus" },
];