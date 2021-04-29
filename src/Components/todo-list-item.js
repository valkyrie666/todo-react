import React from 'react';

export default class TodoListItem extends React.Component {

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

        let classNames = 'todo-list-item clickable ';

        if (done) classNames += 'done ';
        if (important) classNames += 'important ';

        return (
            <div>
                <span className={classNames} onClick={onToggleDone}>{label}</span>
                <div className="row right">
                    <div className="col">
                        <button type="button" className="btn btn-outline-primary" onClick={onToggleImportant}>
                            <i className='fa fa-exclamation' />
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-outline-danger" onClick={this.props.onDeleted}>
                            <i className='fa fa-trash-alt' />
                        </button> 
                    </div>
                </div>
            </div>
            );
    }
}
