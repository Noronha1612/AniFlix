import React, { HTMLAttributes } from 'react';

import { ContentWrapper } from './styles';

interface ContentDescriptionProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    titleDescription: string;
    children?: React.ReactNode;
    imageOnLeft?: boolean
};

const ContentDescription: React.FC<ContentDescriptionProps> = ({ title, titleDescription, children, imageOnLeft, ...props }) => {
    return (
        <ContentWrapper imageOnLeft={ imageOnLeft } { ...props }>
            <div>
                <h1>{ title }</h1><br/>
                <h3>{ titleDescription }</h3>
            
                { children }
            </div>
        </ContentWrapper>
    );
}

export default ContentDescription;