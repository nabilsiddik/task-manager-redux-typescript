import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from './../../../types/type.user';
import type { RootState } from "@/redux/store";

// Interface type for InitialUser
interface InitialUserState {
    users: IUser[]
}
const initialUserState: InitialUserState = {
    users: [
        {
            id: '1',
            firstName: 'Nabil',
            lastName: 'Siddik',
            email: 'nabilsiddik90@gmail.com'
        },
        {
            id: '2',
            firstName: 'Akram',
            lastName: 'Najib',
            email: 'akramnajib90@gmail.com'
        },
    ]
}


// Create a type called DraftUser picking from type IUser
type DraftUser = Pick<IUser, "firstName" | "lastName" | "email">

// Create user along with the user id
const createUser = (draftUser: DraftUser) => {
    return {
        id: nanoid(),
        ...draftUser
    }
}

// Creating the slice
const userSlice = createSlice(
    {
        name: 'user',
        initialState: initialUserState,
        reducers: {
            // Add user action
            addUser: (state, action: PayloadAction<IUser>) => {
                const userData = createUser(action.payload)
                state.users.push(userData)
            }
        }
    }
)

// Return all the users
export const selectAllUsers = (state: RootState) => {
    return state.user.users
}

export const {addUser} = userSlice.actions
export default userSlice.reducer

