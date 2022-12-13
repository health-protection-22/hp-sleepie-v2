export type FiltersProps = {
  choices: {
    [key: string]: string;
  };
  answers?: {
    age?: {
      answer: string;
    };
    gender?: {
      answer: string[];
    };
    allergy?: {
      answer: string[];
    };
    diet?: {
      answer: string[];
    };
    drug?: {
      answer: string[];
    };
    nutraceutical?: {
      answer: string[];
    };
  };
  habits?: {
    [key: string]: string;
  };
  blacklist?: string[];
};
