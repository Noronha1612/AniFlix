import React, { HTMLAttributes } from 'react';

import { ContentWrapper } from './styles';

interface ContentDescriptionProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    titleDescription: string;
    children?: React.ReactNode;
};

const ContentDescription: React.FC<ContentDescriptionProps> = ({ title, titleDescription, children, ...props }) => {
    return (
        <ContentWrapper { ...props }>
            <h1>{ title }</h1>
            <h3>{ titleDescription }</h3>
        
            { children }
        </ContentWrapper>
    );
}

export default ContentDescription;