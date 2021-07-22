import axios from 'axios';

let PROJECT_API_BASE_URL

if (process.env.NODE_ENV === "development") {
    PROJECT_API_BASE_URL = "http://localhost:4000/api/projects"
  } else {
    PROJECT_API_BASE_URL = "ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/api/projects"
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