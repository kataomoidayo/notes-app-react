import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesApp from './notes/NotesApp';

import '../styles/style.css';

// const element = <h1>Hello World</h1>;

const root = createRoot(document.getElementById(`root`));
root.render(<NotesApp />);