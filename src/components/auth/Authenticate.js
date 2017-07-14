import React, {Component} from 'react'
import {connect} from 'react-redux'
import {redirectTo} from '../../actions/userActions'

export default function (ComposedComponent) {
    class Authenticate extends Component {
        componentWillMount() {
            const loggedIn = this.props.loggedIn

            if (!loggedIn) {

                this
                    .props
                    .history
                    .push('/login')
            }
        }
        componentWillUpdate(nextProps) {
            if (!nextProps.loggedIn) {
                this
                    .props
                    .history
                    .push('/')
            }
        }
        render() {
            const loggedIn = this.props.loggedIn
            return (loggedIn
                ? <ComposedComponent {...this.props}/>
                : null)
        }
    }

    const mapStateToProps = (state, ownProps) => {
        return {
            loggedIn: state.getIn(['user', 'isLoggedIn'])
        }
    }
    return connect(mapStateToProps, {redirectTo})(Authenticate)
}
