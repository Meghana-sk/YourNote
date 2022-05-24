import { toast } from "react-toastify";
import axios from "axios";
import { REMOVE_FROM_ARCHIVE, FETCH_NOTES } from "../../shared/variables";

const restoreFromArchiveService = async ({
  token,
  note,
  noteDispatch,
  archiveDispatch,
}) => {
  try {
    const { _id } = note;
    const response = await axios.post(
      `/api/archives/restore/${_id}`,
      { note },
      { headers: { authorization: token } }
    );
    if (response.status === 200) {
      archiveDispatch({
        type: REMOVE_FROM_ARCHIVE,
        payload: { archives: response.data.archives },
      });
      noteDispatch({
        type: FETCH_NOTES,
        payload: { notes: response.data.notes },
      });
      toast.success("Restored note from Archive!");
    } else {
      toast.warning("Something went wrong. Please try again");
    }
  } catch (error) {
    toast.error(error?.response?.data.errors[0]);
  }
};

export { restoreFromArchiveService };
