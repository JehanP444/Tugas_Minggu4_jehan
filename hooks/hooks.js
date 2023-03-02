const api = require('../api_kuncie/api.js');
exports.mochaHooks = {
    
    async beforeAll()  {
      // do something before every test
      let nama = 'mufti'
      const responsecreateUser = await api.createUser(nama);
      //console.log(responsecreateUser.body);
      global.userid = responsecreateUser.body.id;
    }
};