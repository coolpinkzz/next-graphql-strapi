import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {useApollo} from './lib/apollo';
import '../styles/globals.css'

const MyApp = ({Component, pageProps}) => {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
};

export default MyApp;
