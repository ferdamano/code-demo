import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/css/css.js'
import { Controlled } from 'react-codemirror2'


const Editor = ({ displayName, language, value, onChange }) => {
    function handleChange(editor, data, value){
        onChange(value)
    }

    return(
        <div className="editor-container">
            <Controlled 
                onBeforeChange={handleChange}
                value={value}
                className="code-demo-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                }}
            />
        </div>
    )
}

export default Editor;