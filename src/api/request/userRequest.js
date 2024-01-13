import * as UserService from '../../service/UserService'

export async function updateCart(data, id) {
    await UserService.getUserApi.updateUser(data, id)
}

