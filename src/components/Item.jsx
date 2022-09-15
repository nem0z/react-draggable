import { useState, useRef, useEffect } from "react";

export default function Item({children, pos, onDragStart, onDragEnd}) {

    return (
        <div 
            className="DraggableItem"
            draggable="true"
            style={{left: pos.x, top: pos.y}}
			onDragStart={onDragStart}
            onMouseLeave={onDragEnd}
            onMouseUp={onDragEnd}
        >
            {children}
        </div>
    )
}