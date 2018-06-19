import {Container} from 'flux/utils';
import * as React from 'react';
import TodoList from '../components/TodoList';
import TodoStore from '../stores/TodoStore';

interface IState {
    todos: string[]
}

class HomeContainer extends React.Component<{},IState> {
    public static getStores() {
        return [
            TodoStore
        ];
    }
    public static calculateState(): IState {
        return {
            todos: TodoStore.getState().todos
        }
    }
    public render(){
        return (<TodoList todos={this.state.todos} />)
    }
}

export default Container.create(HomeContainer);
