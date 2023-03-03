async function customerMarket(path) {
  const template = await loadTemplateAsync(path)
  Vue.component('customer-market', {
    name: 'customer-market',
    template,

    props: ['products', 'exchange-rates', 'change-page'],
    data: function () {
      return {}
    },
    methods: {},
    created() {}
  })
}
