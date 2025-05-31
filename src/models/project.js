// src/models/Project.js
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,       // URL to the project image
  githubUrl: String
});

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
export default Project;
