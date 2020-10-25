import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Menu } from './Menu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Menu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
