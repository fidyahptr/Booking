import asyncComponent from '../helpers/AsyncFunc';

const routes = [
  {
    path: 'githubSearch',
    component: asyncComponent(() => import('./containers/GithubSearch'))
  },
  {
    path: 'guest',
    component: asyncComponent(() => import('./containers/blankPage'))
  }
];
export default routes;
