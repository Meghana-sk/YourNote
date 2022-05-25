export { loginService } from "./auth-services/login.service";
export { signupService } from "./auth-services/signup.service";

export { fetchNotesService } from "./note-services/fetchNote.service";
export { addNewNoteService } from "./note-services/addNote.service";
export { editNoteService } from "./note-services/editNote.service";

export { fetchTrashNotesService } from "./trash-services/fetchTrashNotes.service";
export { moveToTrashService } from "./trash-services/moveToTrash.service";
export { restoreFromTrashService } from "./trash-services/restoreFromTrash.service";
export { deleteFromTrashService } from "./trash-services/deleteFromTrash.service";

export { fetchArchiveNotesService } from "./archive-services/fetchArchiveNotes.service";
export { addNoteToArchiveService } from "./archive-services/addNoteToArchive.service";
export { restoreFromArchiveService } from "./archive-services/restoreArchive.service";
export { deleteFromArchiveService } from "./archive-services/deleteFromArchive.service";
