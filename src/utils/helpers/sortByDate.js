import { OLDEST_FIRST, NEWEST_FIRST } from "../../shared/variables";

const sortNotesByDate = (notes, type) => {
  if (type === OLDEST_FIRST) {
    return [...notes].sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (type === NEWEST_FIRST) {
    return [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));
  } else {
    return notes;
  }
};

export { sortNotesByDate };
