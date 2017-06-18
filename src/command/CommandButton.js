import * as React from "react";
import {Panel, Button, ButtonGroup} from "react-bootstrap";

class CommandButton extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
                <ButtonGroup justified>
                    <Button onClick={ () => this.setState({open: !this.state.open})}>
                        click
                    </Button>
                </ButtonGroup>
                <Panel collapsible expanded={this.state.open}>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </Panel>
            </div>
        );
    }
}

export default CommandButton;