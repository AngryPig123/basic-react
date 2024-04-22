import {useState} from 'react';

import {CORE_CONCEPTS} from './data.js';
import {EXAMPLES} from './data.js';
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton";

function App() {

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
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>

                        {CORE_CONCEPTS.map((conceptItem) =>
                            <CoreConcept
                                key={conceptItem.title}
                                {...conceptItem}
                            />
                        )}

                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton
                            onSelect={() =>
                                handlerSelect('components')
                            }
                            isSelected={selectedTopic === 'components'}
                        >
                            Components
                        </TabButton>

                        <TabButton
                            onSelect={() =>
                                handlerSelect('jsx')
                            }
                            isSelected={selectedTopic === 'jsx'}
                        >
                            JSX
                        </TabButton>

                        <TabButton
                            onSelect={() =>
                                handlerSelect('props')
                            }
                            isSelected={selectedTopic === 'props'}
                        >
                            Props
                        </TabButton>

                        <TabButton
                            onSelect={() =>
                                handlerSelect('state')
                            }
                            isSelected={selectedTopic === 'state'}
                        >
                            State
                        </TabButton>
                    </menu>
                </section>
                {tabContent}
            </main>
        </div>
    );
}

export default App;
