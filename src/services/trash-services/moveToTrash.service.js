import { toast } from "react-toastify";
import axios from "axios";
import { MOVE_TO_TRASH, FETCH_NOTES } from "../../shared/variables";

const moveToTrashService = async ({
  token,
  note,
  noteDispatch,
  trashDispatch,
}) => {
  try {
    const { _id } = note;
    const response = await axios.post(
      `/api/notes/trash/${_id}`,
      { note },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      noteDispatch({
        type: FETCH_NOTES,
        payload: { notes: response.data.notes },
      });

      trashDispatch({
        type: MOVE_TO_TRASH,
        payload: { trash: response.data.trash },
      });
      toast.success("Moved To Trash!");
    } else {
      toast.warning("Something went wrong. Please try again");
    }
  } catch (error) {
    toast.error(error?.response?.data.errors[0]);
  }
};

export { moveToTrashService };
