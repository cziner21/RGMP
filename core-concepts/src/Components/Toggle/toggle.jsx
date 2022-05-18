import React, { PureComponent } from 'react'

import './toggle.css'

class ToggleSwitch extends PureComponent {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="gender-switch-container">
                <label
                    className={`gender-switch ${
                        this.props.isChecked
                            ? 'gender-switch--on'
                            : 'gender-switch--off'
                    }`}
                >
                    <input
                        checked={this.props.isChecked}
                        onChange={this.props.onHandleToggle}
                        className="gender-switch-checkbox"
                        type="checkbox"
                    />
                    <div className="gender-switch-button" />
                    <div className="gender-switch-labels">
                        <span>{this.props.onText}</span>
                        <span>{this.props.offText}</span>
                    </div>
                </label>
            </div>
        )
    }
}

export default ToggleSwitch
