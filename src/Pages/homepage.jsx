import React, { Profiler } from 'react';

import Directory from '../Components/directory/directory';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
    <HomePageContainer>
        <Profiler id="Directory" onRender={(id, phase, actualDuration)=>{
            console.log({
                id,
                phase,
                actualDuration
            })
        }}>
            <Directory />
        </Profiler>
    </HomePageContainer>
)


export default HomePage;