import axios from "axios";
import { toast } from "react-toastify";
import { FETCH_NOTES_IN_ARCHIVE } from "../../shared/variables";

const fetchArchiveNotesService = async ({ token, archiveDispatch }) => {
  try {
    const getArchiveNotesResponse = await axios.post("/api/archives", {
      headers: { authorization: token },
    });
    if (getArchiveNotesResponse.status === 201) {
      archiveDispatch({
        type: FETCH_NOTES_IN_ARCHIVE,
        payload: { archives: getArchiveNotesResponse.data.archives },
      });
    } else {
      toast.warning("Something went wrong. Please try again");
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { fetchArchiveNotesService };
