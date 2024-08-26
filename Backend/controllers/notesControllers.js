import Notes from "../model/noteModel.js";
import User from "../model/userModel.js";

export const notesControllers = {
  createNote: async (req, res) => {
    try {
      const { title, tag, description } = req.body;

      if (!title || !description) {
        return res.status(400).json({ msg: "PLease fill in all fields." });
      }

      const newNote = await Notes({
        title,
        tag,
        description,
        postedBy: req.user,
      });

      await (await newNote.save()).populate("postedBy", "-password");

      await newNote.save();
      return res
        .status(201)
        .json({ msg: "Note created successfully!!!", notes: newNote });
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
  listAllNotes: async (req, res) => {
    try {
      const notes = await Notes.find().populate("postedBy");
      return res.status(200).json({ msg: "All Notes ...", notes });
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
  listMyNotes: async (req, res) => {
    try {
      const notes = await Notes.find({ postedBy: req.user._id }).populate(
        "postedBy",
        "-password"
      );
      return res.status(200).json({ msg: "My notes ...", notes });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ msg: err.message });
    }
  },
  listOneNote: async (req, res) => {
    try {
      const { noteId } = req.params;
      const note = await Notes.findById(noteId).populate(
        "postedBy",
        "-password"
      );

      if (!note) return res.status(404).json({ msg: "Note not found" });
      await Notes.findOne(note);

      return res.status(200).json({ msg: "One todo", note });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ msg: err });
    }
  },
  updateNote: async (req, res) => {
    try {
      const { noteId } = req.params;
      const { title, tag, description } = req.body;
      // const updatedNotes = await Notes.findByIdAndUpdate(noteId, req.body, {
      //   new: true,
      // });
      const updatedNotes = await Notes.findByIdAndUpdate(
        noteId,
        { title, tag, description },
        {
          new: true,
        }
      );
      return res
        .status(200)
        .json({ msg: "Note Updated!!!", notes: updatedNotes });
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
  deleteNote: async (req, res) => {
    try {
      const { id } = req.params;

      const note = await Notes.findById(id);
      if (!note) return res.status(400).json({ msg: "Note does not exist" });
      await Notes.findByIdAndDelete(note);
      // const deletedNote = await Notes.findByIdAndDelete(id);
      // res.status(200).json({ msg: "Note deleted!!", deletedNote });
      res.status(200).json({ msg: "Note deleted!!" });
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
};
