const ApiRoutes = {
  nutratherapy: {
    dietarySupplements: '/api/sleepie/v5/nutraceuticals{query}',
    combinations: '/api/sleepie/v5/combinations{filtersQuery}',
    drugs: '/api/sleepie/v5/drugs{query}',
    transactions: {
      create: '/transaction/create'
    }
  },
  users: {
    resetPassword: '/user/register-new-password',
    forgotPassword: '/user/forgot-my-password',
    register: '/user/create',
    current: '/user/current',
    login: '/user/login',
    edit: '/user/edit',
    address:{
      getAddresses: '/adresses',
      getAddressesByUuid: '/adresses?uuid={uuid}',
      createAddress: '/address/create',
      updateAddress: '/address/{uuid}/edit',
      deleteAddress: '/address/{uuid}/delete',

    }
  },
  wordpress: {
    graphql: '/graphql?query={query}',
    relations: '/wp-json/hp/v4/relations/{query}',
  },
  publicApiCountry: {
    states: '/states/{countryName}',
    cities: '/cities/{stateName}',
    getAccess: '/getaccesstoken',
    countries: '/countries',
  },
  pgw: {
    startCheckout: '/start-checkout',
    getInfoTransaction: '/transactions/{transactionId}',
  }
};

export default ApiRoutes;
