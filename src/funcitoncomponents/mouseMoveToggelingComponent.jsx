import React, { useState } from 'react';

import UseEffectMouseMoveComponent from './useEffectMouseMoveComponent'; 

const MouseMoveToggelingComponent=()=>{
    const [show, setShow] = useState(true);

    return (
        <div className="contaier">
            <button
             onClick={()=>setShow(!show)} >Toggle</button>
             {
                 show && <UseEffectMouseMoveComponent></UseEffectMouseMoveComponent>
             }
        </div>

    );
};

export default MouseMoveToggelingComponent;