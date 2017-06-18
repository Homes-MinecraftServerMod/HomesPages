/**
 * Created by masahiro on 2017/04/16.
 */
import React from 'react';
import {Grid, PageHeader} from 'react-bootstrap';

export const Homes = React.createClass({
    render() {
        return (<div><Grid>
            <PageHeader>Homes</PageHeader>
            <p>Download : <a href="https://dev.bukkit.org/projects/homes-teleportation-plugin">Homes - Teleportation
                Plugin - Bukkit Plugins</a></p>
            <PageHeader><h2>About</h2></PageHeader>
            <p>The purpose of using Homes is to make simple move using commands and to set the respawn location. First,
                you use the setting command to set the place where you are location as the point called home. Then you
                can move to the set home using the command for movement. Also, if you dead, you can respawn to that
                home.</p>
            <PageHeader><h2>Features</h2></PageHeader>

        </Grid></div>);
    }
});

export default Homes;
