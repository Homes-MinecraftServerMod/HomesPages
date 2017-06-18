import React from "react";
import {Grid, Row, Col, Panel, Button, PageHeader} from "react-bootstrap";
import PlayerHomeCommand from "./playercommand/PlayerHomeCommand";
import PlayerSetCommand from "./playercommand/PlayerSetCommand";
import PlayerDeleteCommand from "./playercommand/PlayerDeleteCommand";
import PlayerListCommand from "./playercommand/PlayerListCommand";
import PlayerPrivateCommand from "./playercommand/PlayerPrivateCommand";
import PlayerInviteCommand from "./playercommand/PlayerInviteCommand";
import PlayerHelpCommand from "./playercommand/PlayerHelpCommand";
import PlayerReloadCommand from "./playercommand/PlayerReloadCommand";
import ConsoleListCommand from "./consolecommand/ConsoleListCommand";
import ConsoleHelpCommand from "./consolecommand/ConsoleHelpCommand";
import ConsoleReloadCommand from "./consolecommand/ConsoleReloadCommand";

export const Command = React.createClass({
    getInitialState() {
        return {overlay: null};
    },
    close() {
        this.setState({overlay: null});
    },
    render() {
        return (<div>{this.state.overlay}<Grid>
            <PageHeader><h2>Command</h2></PageHeader>
            <p>This is a list of commands that can be used with this plugin. You can check the details of the command by
                clicking the button. There are two types of commands: Player Command and Console Command.</p>
            <Row className="show-grid">
                <Col md={6}><Panel header="Player Commands" bsStyle="info">

                    <p>Player Command is a command the player can use in the game.</p>

                    <Button bsStyle="info" block onClick={() => {
                        this.setState({overlay: <PlayerHomeCommand command={this}/>});
                    }}>Home Command</Button>

                    <Button bsStyle="info" block onClick={() => {
                        this.setState({overlay: <PlayerSetCommand command={this}/>});
                    }}>Set Command</Button>

                    <Button bsStyle="info" block onClick={() => {
                        this.setState({overlay: <PlayerDeleteCommand command={this}/>});
                    }}>Delete Command</Button>

                    <Button bsStyle="info" block onClick={() => {
                        this.setState({overlay: <PlayerListCommand command={this}/>});
                    }}>List Command</Button>

                    <Button bsStyle="info" block onClick={() => {
                        this.setState({overlay: <PlayerPrivateCommand command={this}/>});
                    }}>Private Command</Button>

                    <Button bsStyle="info" block onClick={() => {
                        this.setState({overlay: <PlayerInviteCommand command={this}/>});
                    }}>Invite Command</Button>

                    <Button bsStyle="info" block onClick={() => {
                        this.setState({overlay: <PlayerHelpCommand command={this}/>});
                    }}>Help Command</Button>

                    <Button bsStyle="info" block onClick={() => {
                        this.setState({overlay: <PlayerReloadCommand command={this}/>});
                    }}>Reload Command</Button>

                </Panel></Col>
                <Col md={6}><Panel header="Console Commands" bsStyle="success">

                    <p>Console Command is a command the server administrator can use from the console.</p>

                    <Button bsStyle="success" block onClick={() => {
                        this.setState({overlay: <ConsoleListCommand command={this}/>});
                    }}>List Command</Button>

                    <Button bsStyle="success" block onClick={() => {
                        this.setState({overlay: <ConsoleHelpCommand command={this}/>});
                    }}>Help Command</Button>

                    <Button bsStyle="success" block onClick={() => {
                        this.setState({overlay: <ConsoleReloadCommand command={this}/>});
                    }}>Reload Command</Button>

                </Panel></Col></Row></Grid></div>);
    }
});

export default Command;
