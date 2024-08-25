import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        selectedUser: undefined,
        onlineUsers: []
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        }
    }
});

export const { setUsers } = userSlice.actions;

export default userSlice