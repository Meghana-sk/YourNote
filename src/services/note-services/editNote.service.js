import axios from "axios";
import { toast } from "react-toastify";
import { EDIT_NOTE } from "../../shared/variables";

const editNoteService = async ({ inputData, token, noteDispatch }) => {
  try {
    const editNoteResponse = await axios.post(
      `/api/notes/${inputData._id}`,
      { note: inputData },
      { headers: { authorization: token } }
    );
    if (editNoteResponse.status === 201) {
      noteDispatch({
        type: EDIT_NOTE,
        payload: { notes: editNoteResponse.data.notes },
      });
      toast.success("Note updated successfully.");
    } else {
      toast.warning("Something went wrong. Please try again");
    }
  } catch (error) {}
};

export { editNoteService };
