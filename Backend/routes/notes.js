import express from "express";
import fetchUser from "../middleware/fetchUser.js";
import Notes from "../models/Notes.js";
const router = express.Router();

//ROUTE 1: Get all the notes using: GET "/api/notes/fetchallnotes" . Login Required
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.userId });
    res.json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error!");
  }
});

//Second route
router.post("/addnote", fetchUser, async (req, res) => {
  try {
    //data coming from body
    const { title, description, tag } = req.body;

    //validation
    if (!title || !description || !tag) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    //Notes
    const notes = new Notes({ title, description, tag, user: req.userId });

    //Saving Notes
    const savedNote = await notes.save();
    res.json(savedNote);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 3: Update an existing Note using: PUT "api/notes/updatenote." Login required

router.put("/updatenote/:id", fetchUser, async (req, res) => {
  //data coming from body(frontend)
  const { title, description, tag } = req.body;
  const { id } = req.params;

  try {
    //find note to be updated
    let note = await Notes.findById({ _id: id });

    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (String(note.user) !== req.userId) {
      return res.status(401).send("Not Allowed");
    }

    console.log(note);
    const notes = await Notes.findByIdAndUpdate(
      { _id: id },
      { $set: { title, description, tag } },
      { new: true }
    );

    res.json({ notes, success: "Notes updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

//Route 4: Delete  an existing note using: DELETE
router.delete("/deletenote/:id", fetchUser, async (req, res) => {
  try {
    //Find the note to delete it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Note Found");
    }

    //* Allow deletion only if user owns this note
    if (note.user.toString() !== req.userId) {
      return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

//Route 5: Get notes by id: "/api/notes/notes/:id. Login Required"
router.get("/notes/:id", fetchUser, async (req, res) => {
  try {
    const { id } = req.params;

    const notes = await Notes.findById({ _id: id });
    console.log(notes);

    if (notes) {
      return res.status(200).json(notes);
    } else {
      return res.status(404).json({ success: "notes not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
