import axios from 'axios';

const PROJECT_API_BASE_URL = "mysql://b4116b93406311:8013802f@us-cdbr-east-04.cleardb.com/heroku_2d2fbea0d3311b2?reconnect=true"

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