import SideColumn from './SideColumn';
import Logo from './Logo';
import { Fragment } from 'react';
import SideBarFoot from './SideBarFoot';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const SideBar = () =>{
    return(
        <Fragment>
            <Grid direction="row" container style={{
                backgroundColor:"white",
                height:"100%"
            }}>
                {/* <Grid item sx={{
                    width:"100%",
                    height:"15%"
                }}>
                    <Logo></Logo>
                </Grid> */}
                <Grid item sx={{
                    width:"100%",
                    height:"75%",
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