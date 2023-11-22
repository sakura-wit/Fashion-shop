import * as UserService from '../../service/UserService'

export async function updateCart(data, id) {
    // console.log('doneee');
    await UserService.getUserApi.updateUser(data, id)
}

