import { Router } from "express";
import GitHubUserController from "./controllers/GitHubUserController";


const Routes = new Router();

//User Routes
Routes.get('/api/users', GitHubUserController.getUsers);
Routes.get('/api/users/:username/details', GitHubUserController.getUserDetail);
Routes.get('/api/users/:username/repos', GitHubUserController.getUserRepos);

export default Routes;
