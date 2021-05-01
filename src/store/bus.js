const install = function(Vue) {
  const Bus = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(event, ...args);
      },
      on(event, callback) {
        // console.log('bus this',this)
        this.$on(event, callback);
      },
      off(event, callback) {
        this.$off(event, callback);
      }
    }
  });
  Vue.prototype.$bus = Bus;
};

export default install;
