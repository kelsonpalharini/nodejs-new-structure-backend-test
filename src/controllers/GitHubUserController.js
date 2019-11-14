import api from "../api/GitHubConnect";

class GitHubUserController {
  async getUsers(req, res){

    let url = '/users' + (req.query.since ? '?since='+ req.query.since : '');

    await api
        .get(url)
        .then(response => {
          console.log(response);
          return res.json({ data: response.data })
        })
        .catch(error => {
          console.log(error);
          return res.json({error: error})
        });
  }

  async getUserDetail(req, res){

    let url = '/users/' + req.params.username;

    await api
        .get(url)
        .then(response => {
          console.log(response);
          return res.json({ data: response.data })
        })
        .catch(error => {
          console.log(error);
          return res.json({error: error})
        });
  }

  async getUserRepos(req, res){

    let url = '/users/' + req.params.username + '/repos';

    await api
        .get(url)
        .then(response => {
          console.log(response);
          return res.json({ data: response.data })
        })
        .catch(error => {
          console.log(error);
          return res.json({error: error})
        });
  }

}

export default new GitHubUserController();
