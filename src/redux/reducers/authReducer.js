import { createSlice } from '@reduxjs/toolkit'
import { saveString, getString } from '../../utils/localStorage'
import { PLAYERNAME, TOKEN } from '../../constants/localstorageConstant'


const initialState = {
    isAuthed: getString(TOKEN) || false,
    token: getString(TOKEN) || null,
    playerName: getString(PLAYERNAME) || null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        startGame: (state, action) => {
            const { token, playerName } = action.payload
            state.token = token
            state.playerName = playerName
            state.isAuthed = true

            saveString(PLAYERNAME, playerName)
            saveString(TOKEN, token)
        }
    }
})

export const { setToken, startGame } = authSlice.actions
export default authSlice.reducer
