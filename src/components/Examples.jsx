import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from 'react';
import Section from './Section';
import Tabs from "./Tabs";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState(
        undefined
    );

    function handlerSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                buttons={
                <>
                    <TabButton
                        onClick={() =>
                            handlerSelect('components')
                        }
                        isSelected={selectedTopic === 'components'}
                    >
                        Components
                    </TabButton>

                    <TabButton
                        onClick={() =>
                            handlerSelect('jsx')
                        }
                        isSelected={selectedTopic === 'jsx'}
                    >
                        JSX
                    </TabButton>

                    <TabButton
                        onClick={() =>
                            handlerSelect('props')
                        }
                        isSelected={selectedTopic === 'props'}
                    >
                        Props
                    </TabButton>

                    <TabButton
                        onClick={() =>
                            handlerSelect('state')
                        }
                        isSelected={selectedTopic === 'state'}
                    >
                        State
                    </TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    )
};

//  <script src="/js/common/a.js"> </script>
//  fetch("/all/be")
