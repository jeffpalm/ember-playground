import Route from '@ember/routing/route';

export default class ActorsRoute extends Route {
  model() {
    return ['George Clooney', 'Chris Evans', 'Harrison Ford', 'Clint Eastwood']
  }
}
