import React, {Component} from 'react'
import {connect} from 'react-redux'

export default function (ComposedComponent) {
    class Authenticate extends Component {
        componentWillMount() {
            const loggedIn = this
                .props
                .loggedIn
                .get('isLoggedIn')

            if (!loggedIn) {
                this.props.history.push('/login');
            }
        }
        render() {
            return (<ComposedComponent {...this.props}/>)
        }
    }

    const mapStateToProps = (state, ownProps) => {
        return {
            loggedIn: state.get('user')
        }
    }
    return connect(mapStateToProps)(Authenticate)
}
