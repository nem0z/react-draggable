import { useState } from 'react';

import DraggableContainer from './components/Container';
import DraggableItem from './components/Item';


function App() {

  return (
    <div className="App">
    	<DraggableContainer>
        <p>Coucou</p>
    	</DraggableContainer>
    </div>
  )
}

export default App;

/* 
	<DraggableItem x={250} y={200}>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quas autem aspernatur</p>
    </DraggableItem>

    <DraggableItem x={500} y={300}>
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quas autem aspernatur</p>
    </DraggableItem>
*/
