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
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { fetchNotesService };
