export type TBook = {
  abbrev: { [k: string]: string };
  author: string;
  chapters: number;
  group: string;
  name: string;
  testament: string;
};

export type TVerses = {
  book: Pick<TBook, "abbrev" | "author" | "group" | "name"> & {
    version: "string";
  };
  chapter: {
    number: number;
    verses: number;
  };
  verses: Array<{ number: number; text: string }>;
};
