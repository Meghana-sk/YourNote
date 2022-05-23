import axios from "axios";
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
  } catch (error) {}
};

export { fetchNotesService };
