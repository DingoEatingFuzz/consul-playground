import Service, { inject as locate } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  store: locate('store'),
  items: computed(function() {
    return this.get('store').findAll('datacenter');
  }),
  services: computed(function() {
    return this.get('store').findAll('service-collection');
  }),
});
