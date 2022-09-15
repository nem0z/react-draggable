import { useState, useRef, useEffect, Children, cloneElement } from 'react';

import './draggable.css';

import Item from './Item';
import { prevent } from '../utils.js';

export default function Container({children}) {

    const component = useRef();

    const [cPos, setcPos] = useState(
        Children.toArray(children).map((c, i) => ({x: (i+1)*100, y: (i+1)*50}))
    );

    const [drag, setDrag] = useState(null);

    const handleDrag = (e, dragValue) => {
        e.preventDefault();
        setDrag(dragValue);
    }

    const handleMouseMove = e => {
        e.preventDefault();
        if(drag === null) return;
        const {movementX, movementY} = e;

        setcPos(prev => prev.map((c, i) => {
            if(i !== drag) return c;
            const {width, height} = component.current.getBoundingClientRect();
            const [newX, newY] = [c.x + movementX, c.y + movementY]
            return {
                x: newX + 100 > width ? width - 100 : newX, 
                y: newY + 50 > height ? height - 50 : newY,
            };
        }));

    };
    
    return (
        <div 
            className="DraggableContainer" 
            onMouseMove={handleMouseMove}
            ref={component}
            onMouseLeave={e => handleDrag(e, null)}
            onMouseUp={e => handleDrag(e, null)}
        >
            <h1>Container</h1>
            {Children.toArray(children).map((child, i) => 
                <Item 
                    pos={{x: cPos[i].x, y: cPos[i].y}}
                    key={i}
                    onDragStart={e => handleDrag(e, i)}
                >
                    {child}
                </Item>
            )}
        </div>
    )
}