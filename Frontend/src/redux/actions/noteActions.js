import { NOTE_TYPES } from "../types";
import * as api from "../apis";

export const getAllNotes = () => async (dispatch) => {
  try {
    const { data } = await api.listAllNotes();

    dispatch({
      type: NOTE_TYPES.GET_ALL_NOTE,
      payload: data.notes,
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
