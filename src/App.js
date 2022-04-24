import { useState } from 'react';
import './App.css';

function Article(props) {
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}

function Header(props) {
    return <header>
        <h1><a href="/" onClick={(event) => {
            event.preventDefault();
        }}>{props.title}</a></h1>
    </header>
}

function Nav(props) {
    const lis = []
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}>
            <a id={t.id} href={'/read/' + t.id} onClick={event => {
                event.preventDefault();
                props.onChangeMode(t.id)
            }}>{t.title}</a>
        </li>)
    }
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}

function App() {
    const [topicId, setTopicId] = useState(0)
    const topics = [
        { id: 0, title: 'Welcome', body: 'Hello World' },
        { id: 1, title: 'html', body: 'html is ...' },
        { id: 2, title: 'css', body: 'css is ...' },
        { id: 3, title: 'javascript', body: 'javascript is ...' }
    ]

    console.log(topics[topicId])
    return (
        <div>
            <Header title="WEB" ></Header>
            <Nav topics={topics} onChangeMode={setTopicId}></Nav>
            <Article title={topics[topicId].title} body={topics[topicId].body}></Article>
        </div>
    );
}

export default App