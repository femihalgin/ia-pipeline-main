'use strict';
import userController from '../controllers/user_controller'
const createUser = {
  function (app) {

    //Users Routes
    app.route('/users/')
        .get(userController.allUserList)
        .post(userController.createUser);


    app.route('/users/:userId')
        .get(userController.viewUser)
        .put(userController.updateUser)
  }
}

export default createUser



