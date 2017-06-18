/**
 * Created by masahiro on 2017/04/16.
 */
import React from 'react';
import {Grid, PageHeader, ButtonGroup, Button, Row, Col} from 'react-bootstrap';

export const Homes = React.createClass({
    render() {
        return (<div><Grid>
            <PageHeader>Homes</PageHeader>

            <ButtonGroup justified>
                <Button href="https://dev.bukkit.org/projects/homes-teleportation-plugin">Bukkit</Button>
                <Button href="https://www.spigotmc.org/resources/homes-teleportation-plugin.36871/">Spigot</Button>
                <Button href="https://github.com/Homes-MinecraftServerMod/Homes">GitHub</Button>
            </ButtonGroup>

            <Row className="show-grid"><Col md={6}>
                <PageHeader><h2>About</h2></PageHeader>
                <p>The purpose of using Homes is to make simple move using commands and to set the respawn location.
                    First, you use the setting command to set the place where you are location as the point called home.
                    Then you can move to the set home using the command for movement. Also, if you dead, you can respawn
                    to that home.</p>
            </Col><Col md={6}>
                <PageHeader><h2>Download</h2></PageHeader>
                <ButtonGroup>
                    <Button bsStyle="success" href="https://dev.bukkit.org/projects/homes-teleportation-plugin">Download
                        from Bukkit</Button>
                </ButtonGroup>
            </Col></Row>

        </Grid></div>);
    }
});

export default Homes;
