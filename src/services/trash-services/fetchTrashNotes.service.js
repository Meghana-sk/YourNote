import axios from "axios";
import { toast } from "react-toastify";
import { LOAD_NOTES_IN_TRASH } from "../../shared/variables";

const fetchTrashNotesService = async ({ inputData, token, trashDispatch }) => {
  try {
    const getTrashNotesResponse = await axios.post("/api/trash", {
      headers: { authorization: token },
    });
    if (getTrashNotesResponse.status === 201) {
      trashDispatch({
        type: LOAD_NOTES_IN_TRASH,
        payload: { trash: getTrashNotesResponse.data.trash },
      });
    } else {
      toast.warning("Something went wrong. Please try again");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { fetchTrashNotesService };
