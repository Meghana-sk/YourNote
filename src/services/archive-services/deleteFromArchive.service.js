import { toast } from "react-toastify";
import axios from "axios";
import {
  DELETE_FROM_ARCHIVE,
  FETCH_NOTES_IN_ARCHIVE,
} from "../../shared/variables";

const deleteFromArchiveService = async ({ token, note, archiveDispatch }) => {
  try {
    const { _id } = note;
    const response = await axios.delete(`/api/archives/delete/${_id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      archiveDispatch({
        type: DELETE_FROM_ARCHIVE,
        payload: { archives: response.data.archives },
      });
      archiveDispatch({
        type: FETCH_NOTES_IN_ARCHIVE,
        payload: { archives: response.data.archives },
      });
      toast.success("Deleted note from archive!");
    } else {
      toast.warning("Something went wrong. Please try again");
    }
  } catch (error) {
    toast.error(error?.response?.data.errors[0]);
  }
};

export { deleteFromArchiveService };
