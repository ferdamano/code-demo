
import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');

  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>
        html {
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
        body {
          margin: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
        .box {
          font-size: 2rem;
          padding: 1rem;
          border-radius: 1rem;
          border-style: dashed;
        }
        .parent {
          width: 100%;
          height: 100%;
        }
        ${css}
      </style>
    </html>
  `;
  return (
    <>
      <div className="section">
        <div className="activity-row">
          <div className="exec-col left-pane">
            <div className="resizing">
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="builder-col right-pane">
            <Tabs>
              <TabList>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
              </TabList>
              <TabPanel>
                <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
              </TabPanel>
              <TabPanel>
                <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
