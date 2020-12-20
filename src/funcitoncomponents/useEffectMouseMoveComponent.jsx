import React, { useEffect, useState } from 'react';


const UseEffectMouseMoveComponent=()=>{
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const getMousePositions=(evt)=>{
        setX(evt.clientX);
        setY(evt.clientY);
        console.log(`x = ${x} and y = ${y}`);
    };


    useEffect(()=>{
        console.log(`Mouse Move Called`);
        window.addEventListener('mousemove', getMousePositions);

        // return the cleanup operations from useEffect() like componentWillUnMount   
        return()=>{
            console.log('The Mouse Move event is release');
             window.removeEventListener('mousemove', getMousePositions);
        }

    },[]);

    return (
        <div className="container">
          Use Effect x = {x} y = {y}
        </div>
    );
};

export default UseEffectMouseMoveComponent;