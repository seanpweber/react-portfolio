import axios from 'axios';
require('dotenv').config();

let PROJECT_API_BASE_URL

if (process.env.NODE_ENV === "JAWSDB_URL") {
    PROJECT_API_BASE_URL = process.env.JAWSDB_URL;
  } else {
    PROJECT_API_BASE_URL = "localhost:3000/api/projects"
  }

class ProjectService {

    getProjects(){
        return axios.get(PROJECT_API_BASE_URL);
    }

    createProject(project){
        return axios.post(PROJECT_API_BASE_URL, project);
    }

    getProjectById(projectId){
        return axios.get(PROJECT_API_BASE_URL + '/' + projectId);
    }

    updateProject(project, projectId){
        return axios.put(PROJECT_API_BASE_URL + '/' + projectId, project);
    }

    deleteProjectById(projectId){
        return axios.delete(PROJECT_API_BASE_URL + '/' + projectId);
    }

    deleteProjects(){
        return axios.delete(PROJECT_API_BASE_URL);
    }
}

export default new ProjectService();