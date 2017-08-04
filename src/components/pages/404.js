import React, { Component } from 'react';

class Error404 extends Component {
    render() {
        return (
            <div>
                <div class="error-container">
                    <i class="pe-7s-way text-danger big-icon"></i>
                    <h1>404</h1>
                    <strong>Page Not Found</strong>
                    <p>
                        Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button on your browser or try find something else in our app.

                    </p>
                    <a href="index.html" class="btn btn-xs btn-success">Go back to dashboard</a>
                </div>
            </div>
        )
    }
}