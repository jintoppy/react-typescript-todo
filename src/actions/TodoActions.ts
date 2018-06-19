import AppDispatcher from '../AppDispatcher';

export const addTodo = () => {
    AppDispatcher.dispatch({
        payload: 'Item for adding',
        type: 'ADD_TODO'        
    });
};