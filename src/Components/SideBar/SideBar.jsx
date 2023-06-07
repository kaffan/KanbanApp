import SideColumn from './SideColumn';
import Logo from './Logo';
import { Fragment } from 'react';
import SideBarFoot from './SideBarFoot';
import { Grid } from '@mui/material';

const SideBar = () =>{
    return(
        <Fragment>
            <Grid direction="row" container style={{
                height:"100%",
                width:"100%",
                boxShadow:"0.5px 0.5px 2px #979797",
                backgroundColor:"white"
            }}>
                <Grid item sx={{
                    width:"100%",
                    height:"15%"
                }}>
                    <Logo></Logo>
                </Grid>
                <Grid item sx={{
                    width:"100%",
                    height:"60%",
                    overflow:"auto"
                }}>
                    <SideColumn></SideColumn>
                </Grid>
                <Grid item sx={{
                    width:"100%",
                    height:"15%"
                }}>
                    <SideBarFoot></SideBarFoot>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default SideBar;