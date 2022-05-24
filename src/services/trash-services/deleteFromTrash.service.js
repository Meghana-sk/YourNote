import { toast } from "react-toastify";
import axios from "axios";
import { DELETE_FROM_TRASH, LOAD_NOTES_IN_TRASH } from "../../shared/variables";

const deleteFromTrashService = async ({ token, note, trashDispatch }) => {
  try {
    const { _id } = note;
    const response = await axios.delete(`/api/trash/delete/${_id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      trashDispatch({
        type: DELETE_FROM_TRASH,
        payload: { trash: response.data.trash },
      });
      trashDispatch({
        type: LOAD_NOTES_IN_TRASH,
        payload: { trash: response.data.trash },
      });
      toast.success("Deleted note from Trash!");
    } else {
      toast.warning("Something went wrong. Please try again");
    }
  } catch (error) {
    toast.error(error?.response?.data.errors[0]);
  }
};

export { deleteFromTrashService };
