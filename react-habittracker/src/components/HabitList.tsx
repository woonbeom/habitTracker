import React, { Component } from 'react';
import HabitItem from './HabitItem';

type props = {
    habits?: string;
    onToggle?: (id: string) => void;
    onRemove?: () => void;
}

// class형 컴포넌트는 컴포넌트 최적화가 가능하다.
class HabitList extends Component<props> {
    render() {
        const { habits, onToggle, onRemove } = this.props;
        
        return (
            <div>
                <HabitItem text="안녕"/>
                <HabitItem text="리액트"/>
                <HabitItem text="반가워"/>
            </div>
        );
    }
}

export default HabitList;