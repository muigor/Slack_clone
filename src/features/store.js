import { createSlice, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';



const UserSlice = createSlice({
  name: 'user_info',
  initialState: {
    user: null
  },
  reducers: {
    SET_USER: (state,action) => {
      state.user=action.payload.user
    },
  }
})

export const { SET_USER } = UserSlice.actions

  const root_reducer=combineReducers({user_info: UserSlice.reducer})




export const store = configureStore({
    reducer: root_reducer,
    middleware: (getDefaultMiddleware,thunk) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          // Ignore these field paths in all actions
          ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
          // Ignore these paths in the state
          ignoredPaths: ['items.dates'],
          thunk:thunk
        },
      }), // Ajout du middleware Redux Thunk
    // ... autres configurations du store
  });

