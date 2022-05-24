import axios from "axios";
import { toast } from "react-toastify";
import { ADD_TO_ARCHIVE, FETCH_NOTES } from "../../shared/variables";

const addNoteToArchiveService = async ({
  note,
  token,
  noteDispatch,
  archiveDispatch,
}) => {
  try {
    const { _id } = note;
    const addNoteToArchiveResponse = await axios.post(
      `/api/notes/archives/${_id}`,
      { note },
      { headers: { authorization: token } }
    );
    if (addNoteToArchiveResponse.status === 201) {
      archiveDispatch({
        type: ADD_TO_ARCHIVE,
        payload: { archives: addNoteToArchiveResponse.data.archives },
      });
      noteDispatch({
        type: FETCH_NOTES,
        payload: { notes: addNoteToArchiveResponse.data.notes },
      });
      toast.success("Note archived successfully.");
    } else {
      toast.warning("Something went wrong. Please try again");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { addNoteToArchiveService };
