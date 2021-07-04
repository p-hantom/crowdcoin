import React from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

const layout = (props) => {
    return (
        <Container>
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
            </Head>
            
            <div>
                <Header />
                {props.children}
                <h1>footer</h1>
            </div>
        </Container>
        
    )
}

export default layout;