import React from 'react';

export const ListItem = (props) => {
    const {item,activeId} = props;
    const isActive = (activeId === item.id) ? 'active' : '';
    return (
        <a className={`list-group-item ${isActive}`} href={`/${item.category}/${item.id}`}
           onClick={(e) => {
               e.preventDefault();
               props.itemChanged(item.id);
           }}>
            <h4 className="list-group-item-heading">{item.name}</h4>
            <p className="list-group-item-text">{item.description}</p>
        </a>
    );
};