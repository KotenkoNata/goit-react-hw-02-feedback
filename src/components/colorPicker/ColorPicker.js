import React, { Component } from 'react';

import classNames from 'classnames';

import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionIdx,
    });

    // console.log(clsx);

    // const optionClasses = ['ColorPicker__option'];

    // if (index === this.state.activeOptionIdx) {
    //   optionClasses.push('ColorPicker__option--active');
    // }

    // return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { option } = this.props;

    const { label } = option[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет:{label} </p>
        <div>
          {this.props.option.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              onClick={() => this.setActiveIdx(index)}
              style={{
                backgroundColor: color,
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
