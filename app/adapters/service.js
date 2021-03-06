import Adapter from './application';
export default Adapter.extend({
  urlForFindAll() {
    return `/${this.namespace}/internal/ui/services`;
  },
  urlForFindRecord(id, modelName) {
    return `/${this.namespace}/health/service/${id}`;
  }
});
