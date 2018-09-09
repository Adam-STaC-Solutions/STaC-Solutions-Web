import React from 'react';
import ImageBar from './common/image-bar.jsx'
import ContentBar from './common/content-bar.jsx'
import CircleSection from './home/circle-section.jsx'
import Circle from './home/circle.jsx'

class Home extends React.Component {
    render() {
        return (
            <article>
                <ImageBar ImageClass="parallax parallax--weave" />
                <ContentBar title="Software, Technology and Cloud">
                    <CircleSection>
                        <Circle Label="Software" AltText="Website Icon" Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFrSURBVHhe7dIxTgMxEEbhHBok7pCeioarIK5AxwGoucBGI02xxY4d6a03Znmf9FeOVvZTLpIkaRZPr5+Lq5eZavGjj5/FbcyAcAaEMyCcAeEMCGdAuF0Cxvl6e5/PvLhvZqr1HrV+/NZv6fnMi/tmplrvUevHb/2Wns+8uG9mqvUetX781m/p+cyL+2am2l971JEzIJwB4QwIZ0A4A8IZEO7ugK5eZqq9XN8WbYs2malmwJoBIQNCBoQMCO0S8Pr8fsgqcb+Ra4nzzFTrfSQe9/31O3StgI9kQMiAkAEhA0IGhAwInSJg3G/kWuI8M9V6H/Ef2GHAmgEhA0IGhAwIGRA6RcC438i1xHlmqvU+4j+ww4A1A0IGhAwIGRAyIHSKgHG/kWuJ88xU633Ef2CHAWsGhAwIGRAyIGRA6BQB434j1xLnmanW+0g87ojNaJeA/5kBIQNCBoQMCBkQMiB0d0BXLzNJkqQHu1xuRzppW+fxzXUAAAAASUVORK5CYII=" />
                        <Circle Label="Technology" AltText="Computer Icon" Image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMgSURBVHhe7ZxNa1NBFIa7qhv/gf/Jnf+g2oQmUaEbk5CkoI0g2nw0LWor0VYoXShWW0EQmrpuBUHNR/EzuvEDiVm0uBjve53LtGZCQk7aVO974IFwb06YPMzkJBnODDEYRytOJZPDo/Hc+XCqUA7EsrtnLkwpPwMHkYnC60A0ew5utCZ7jEavngglCrX09eXms62Kqn3+rt5/afgaONjYKqvJ2eVmKDFdhSOta3+Ew9ljY8np7cWHG79sL0Qa6q7jZiyRr8GV1mYCUxSWbYnEkJ5d+hmMZ85qbSawzrFsbUnEgOUcSc280tpM4MOSn3mdqX365hSW3I7WZgIVx5ZAWoErrc0EBXZPTwJPRld9hc2BR88Crzz+4QsoUAgFCqFAIRQohAKFUKAQChRCgUIoUAgFCqFAIRQohAKFUKAQChRCgUIoUAgFCqFAIRQohAKFUKAQChRCgUIoUAgFCqFAIRQohAKFUKAQChRCgUIoUAgFCqFAIQcm0E/YHHj0JJAYKFCIVSBbvbqjbasXmg3RSGdLIoa2zYZo4WS7a2cuzSw1A9FcRGsz4TZcJ/LbaCq2JZKGWlgpoeG62rb1/0/Lf76KpmJMVax32wv5CTgobZbVRWfmhRKFStuWfy8cu8cDsfz9cKqwG4xl3YrjZ+AgMjGz4xSOe3CjNdmDh060wkMn+ggPnegDPHRCCA+dEMJDJ/oAXGltJiiweyhQ8+LDR5VenVMjxZjL5KM5tfnmrfW5e6FAB8gLLqRUpjSvHlTWXDLr8861pHOvbs3x6Ekg7g8S25gkYOZNOcKevHu6D1xLr81ZczwwHq3NRKdB7n0zg8A2Jgkjxag76/4WiGuni3FrjgfGo7WZ6Ncgn9fqanzyZosAj/H0Dfc5ttzD5MgKBJX6V7W4sq7i1+6oUCLvgse4hnu2nMMGBaPdEr68Nm/N8Thwgf8CqLYoGBCGWQfwGIXlQIrI/4j7NcaZbViyI7fjzsy71VEeoEAhVoH8Ldwd3JUTwl05IdyVE8BduR7oZVduGH/vY50HYpkdVBw/AwdOfXiJZdt25jEYA4qhod+CLvPgIVGJ2QAAAABJRU5ErkJggg==" />
                        <Circle Label="Cloud" AltText="Cloud Icon" Image="data:image/png;base64,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" />
                    </CircleSection>
                    <p>
                        As a specialist provider of software, technology and cloud solutions, we are always on the lookout for the latest trends and how they can benefit our clients.
                    </p>
                </ContentBar>
                <ImageBar ImageClass="parallax parallax--lights" />
                <ContentBar title="Extensive Experience">
                    <CircleSection>
                        <Circle Label="eCommerce" AltText="eCommerce Icon" Image="data:image/png;base64,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" />
                        <Circle Label="Warehousing &amp; Logistics" AltText="Logistics Icon" Image="data:image/png;base64,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" />
                        <Circle Label="Telecommunications" AltText="Telecommunications Icon" Image="data:image/png;base64,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" />
                        <Circle Label="Automotive" AltText="Automotive Icon" Image="data:image/png;base64,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" />
                        <Circle Label="Fashion" AltText="Fashion Icon" Image="data:image/png;base64,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" />
                        <Circle Label="Education" AltText="Education Icon" Image="data:image/png;base64,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" />
                    </CircleSection>
                    <p>Our team have worked on over 70 distinct products, across 6 distinct sectors.</p>
                    <p>This means we are not only equipped to tackle industry specific problems, but we also leverage our knowledge from other sectors to enhance our solutions.</p>
                </ContentBar>
                <ImageBar ImageClass="parallax parallax--triangles" />
                <ContentBar title="Challenge Us!">
                    <p>
                        We love working on projects of any size.
                    </p>
                    <CircleSection>
                        <Circle Label="Prototypes" AltText="Prototype Icon" Image="data:image/png;base64,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" />
                        <Circle Label="Green Field Projects" AltText="Green Field Icon" Image="data:image/png;base64,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" />
                        <Circle Label="Brown Field Projects" AltText="Borwn Field Icon of a city" Image="data:image/png;base64,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" />
                    </CircleSection>
                    <p>
                        No project is too big or small. We are available for rapid prototyping, new green field systems, system analysis, migrations and transformations.
                    </p>
                </ContentBar>
                <ImageBar ImageClass="parallax parallax--circuit" />
            </article>
        )
    }
}

export default Home