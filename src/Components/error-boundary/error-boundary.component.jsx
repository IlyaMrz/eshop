import React from 'react';
// https://www.kapwing.com/404-illustrations?ref=producthunt

import { 
    ErrorImageOverlay, 
    ErrorImageContainer, 
    ErrorImageText
        } from './error-boundary.styles'

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return {hasErrored: true}
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={'https://i.imgur.com/Q2BAOd2.png'} />
                        <ErrorImageText>Something went wrong</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children
    }

}

export default ErrorBoundary;