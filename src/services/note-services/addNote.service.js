import axios from "axios";
import { toast } from "react-toastify";
import { ADD_NOTE } from "../../shared/variables";

const addNewNoteService = async ({ inputData, token, noteDispatch }) => {
  try {
    const addNewNoteResponse = await axios.post(
      "/api/notes",
      { note: inputData },
      { headers: { authorization: token } }
    );
    if (addNewNoteResponse.status === 201) {
      noteDispatch({
        type: ADD_NOTE,
        payload: { notes: addNewNoteResponse.data.notes },
      });
      toast.success("Note added successfully.");
    } else {
      toast.warning("Something went wrong. Please try again");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { addNewNoteService };
