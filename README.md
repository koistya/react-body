# [react-body](https://www.npmjs.com/package/react-body)

React component that conditionally adds CSS class name(s) to `document.body`

- - -

<p align="center">
  <b>🔥 Want to strengthen your core JavaScript skills and master ES6 and React?</b><br>
  I would personally recommend this awesome <a href="https://es6.io/friend/konstantin">ES6</a>
  and <a href="https://reactforbeginners.com/friend/konstantin">React</a> courses by Wes Bos.
</p>

- - -

### How to Install

```sh
$ npm install react-body --save
```

### How to Use

```jsx
<ReactBody className=<CSS-CLASS-NAME> if=<CONDITION> />
```

..where `<CSS-CLASS-NAME>` is the CSS class name(s) that must be appended to
`document.body` when component is rendered and `<CONDITION>` is a `true`
(defualt) or `false` flag indicating if document.body should actually be
altered.

##### For example:

```js
import React from 'react';
import ReactBody from 'react-body';

class MyComponent extends React.Component {

  static defaultProps = {
    inverted: false,
  };

  static propTypes = {
    inverted: React.PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div>
        <ReactBody className="inverted" if={this.props.inverted} />
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

export default MyComponent;
```

### License

The MIT License © 2016-present Konstantin Tarkus ([@koistya](https://twitter.com/koistya)).  All rights reserved.
