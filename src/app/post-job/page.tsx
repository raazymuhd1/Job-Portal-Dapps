"use client"
import React from 'react'
import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';

const initialConfig = {
    namespace: "Text Editor",
    theme: { color: "red" },
    onError(error: Error) {
        throw error;
    }
}

const Post = () => {
  return (
    <LexicalComposer initialConfig={initialConfig} >
        <RichTextPlugin 
            contentEditable={<ContentEditable />} 
            placeholder={<div> Some text </div>}
            ErrorBoundary={LexicalErrorBoundary}    
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
    </LexicalComposer>
  )
}

export default Post