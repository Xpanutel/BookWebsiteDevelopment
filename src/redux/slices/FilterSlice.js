import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: {
        name:'По рейтингу(ASC)',
        sortProps:'RAITING_ASC'
    }
}

export const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setSortState: (state, action) => {
            state.sort.sortProps = action.payload;
        }
    }
})

export const {setSortState} = filterSlice.actions;
export default filterSlice.reducer