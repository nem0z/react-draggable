import { useState, useRef, useEffect } from "react";

export default function Item({children, pos, onDragStart}) {

    return (
        <div 
            className="DraggableItem"
            draggable="true"
            style={{left: pos.x, top: pos.y}}
			onDragStart={onDragStart}
        >
            {children}
        </div>
    )
}