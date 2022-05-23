import axios from "axios";
import { toast } from "react-toastify";
import { FETCH_NOTES } from "../../shared/variables";

const fetchNotesService = async (token, noteDispatch) => {
  try {
    const fetchNotesResponse = await axios.get(`/api/notes`, {
      headers: { authorization: token },
    });
    if (fetchNotesResponse.status === 200) {
      noteDispatch({
        type: FETCH_NOTES,
        payload: { notes: fetchNotesResponse.data.notes },
      });
      console.log("notes availanle", fetchNotesResponse);
    }
  } catch (error) {
    toast.error(error.fetchNotesResponse.data.errors[0]);
  }
};

export { fetchNotesService };
