// src/app/api/projects/route.js
import { connectToDatabase } from '@/lib/mongodb';
import Project from '@/models/project';

export async function GET() {
  try {
    await connectToDatabase();
    const projects = await Project.find();
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return new Response(JSON.stringify({ message: 'Failed to fetch projects' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
