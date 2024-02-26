import expressHandler from 'express-async-handler';
import Images from '../models/imageSchema.js';

// create image
export const postImage = expressHandler(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file found" });
    }

    const { filename, path } = req.file;

    const imageFile = new Images({
      filename,
      filepath: path,
    });

    const savedImage = await imageFile.save();

    res.status(201).json({ message: "Image uploaded successfully", data: savedImage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// get all images
export const getAllImages = async (req, res) => {
    try {
      const images = await Images.find();
      res.json(images);
    } catch (err) {
      console.log(err);  
    }
    
  }

