import { toast } from "react-toastify";
import axios from "axios";
import { RESTORE_FROM_TRASH, FETCH_NOTES } from "../../shared/variables";

const restoreFromTrashService = async ({
  token,
  note,
  noteDispatch,
  trashDispatch,
}) => {
  try {
    const { _id } = note;
    const response = await axios.post(
      `/api/trash/restore/${_id}`,
      { note },
      { headers: { authorization: token } }
    );
    if (response.status === 200) {
      trashDispatch({
        type: RESTORE_FROM_TRASH,
        payload: { trash: response.data.trash },
      });
      noteDispatch({
        type: FETCH_NOTES,
        payload: { notes: response.data.notes },
      });
      toast.success("Restored note from Trash!");
    } else {
      toast.warning("Something went wrong. Please try again");
    }
  } catch (error) {
    toast.error(error?.response?.data.errors[0]);
  }
};

export { restoreFromTrashService };
