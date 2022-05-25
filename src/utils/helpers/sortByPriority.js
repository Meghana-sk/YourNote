import {
  LOW_TO_HIGH_PRIORITY,
  HIGH_TO_LOW_PRIORITY,
} from "../../shared/variables";

const sortNotesByPriority = (notes, type) => {
  const lowPriorityNotes = notes.filter((note) => note.priority === "low");
  const hightPriorityNotes = notes.filter((note) => note.priority === "high");
  if (type === LOW_TO_HIGH_PRIORITY) {
    return [...lowPriorityNotes, ...hightPriorityNotes];
  } else if (type === HIGH_TO_LOW_PRIORITY) {
    return [...hightPriorityNotes, ...lowPriorityNotes];
  } else {
    return notes;
  }
};

export { sortNotesByPriority };
