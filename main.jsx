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
      document.body.classList.add(this.props.className);
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.props.if !== nextProps.if || this.props.className !== nextProps;
  }

  componentDidUpdate() {
    document.body.classList[this.props.if ? 'add' : 'remove'](this.props.className);
  }

  componentWillUnmount() {
    document.body.classList.remove(this.props.className);
  }

  render() {
    return this.props.if ? <script
      dangerouslySetInnerHTML={{
        __html: `document.body.classList.add('${this.props.className}');`,
      }}
    /> : null;
  }

}

export default Body;
