import axios from "../config/axios";

export const updateUser = (input ) => {

    return (
        axios.patch('/users', input)
    )
}

export const getUserFriends = ( id ) => {

    return (
        axios.get(`/users/${id}/friends`)
    )

}