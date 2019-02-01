import AppDispatcher from './AppDispatcher';


// action creators are functions that create objects and send them to the app dispatcher
export const updateNumberOfPeople = (value) =>{
    const action = { type: 'UPDATE_NUMBER_OF_PEOPLE', value };
    AppDispatcher.dispatch(action);
}

export const updateSlicesPerPerson = (value) =>{
    AppDispatcher.dispatch({
        type: 'UPDATE_SLICES_PER_PERSON',
        value
    });
}

export const reset = () =>{
    AppDispatcher.dispatch({
        type: 'RESET'
    });
}