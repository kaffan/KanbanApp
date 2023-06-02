import SideColumn from './SideColumn';
import Logo from './Logo';
import { Fragment } from 'react';

const SideBar = () =>{
    return(
        <Fragment>
            <div style={{
                height:"100%",
                width:"21%",
                boxShadow:"0.5px 0.5px 2px #979797"
            }}>
                <Logo></Logo>
                <SideColumn></SideColumn>
            </div>
        </Fragment>
    )
}

export default SideBar;