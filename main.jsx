/**
 * Copyright © 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Conditionally adds CSS class name(s) to document.body. For example:
 *
 *   <Body className="dark" if={this.context.theme.isDark} />
 */
class Body extends React.Component {

  static defaultProps = {
    if: true,
  };

  static propTypes = {
    className: PropTypes.string.isRequired,
    if: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    if (this.props.if) {
      this.props.className.split(' ').forEach(c => {
        document.body.classList.add(c);
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.if !== nextProps.if || this.props.className !== nextProps;
  }

  componentDidUpdate() {
    this.props.className.split(' ').forEach(c => {
      document.body.classList[this.props.if ? 'add' : 'remove'](c);
    });
  }

  componentWillUnmount() {
      this.props.className.split(' ').forEach(c => {
        document.body.classList.remove(c);
      });
  }

  render() {
    return this.props.if ? <script
      dangerouslySetInnerHTML={{
        __html: this.props.className.split(' ').map(c => `document.body.classList.add(${c});`).join(' '),
      }}
    /> : null;
  }

}

export default Body;
