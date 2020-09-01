import React from 'react';
import {Navbar, NavbarText, Form, Button, Input} from 'reactstrap';
import'../node_modules/bootswatch/dist/materia/bootstrap.min.css'

export default class Header extends React.Component{

    render(){

        return (
            <header>
                <Navbar>
                    <NavbarText>Github User Search</NavbarText>
                    <Form onSubmit={this.props.handleSubmit}>
                        <Input
                            type='text'
                            name='searchInput'
                            value={this.props.searchInput}
                            onChange={this.props.handleChanges}
                            placeholder='Enter github profile...'
                        />
                        <Button>Search</Button>
                    </Form>
                </Navbar>
            </header>
        )
    }
}