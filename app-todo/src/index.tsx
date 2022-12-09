
import { createRoot, Root } from 'react-dom/client';
import { App } from './App';
import React from 'react';
import './style.css'

declare const window: any;

let root: Root;

function render(props: any) {
    const { container } = props;
    root = createRoot(container ? container.querySelector('#todo') : document.querySelector('#todo'));
    root.render(
        <App />
    )

}
if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('todo app bootstraped');
}

export async function mount(props: any) {
    render(props);
}

export async function unmount() {
    root && root.unmount();
}

export async function update(props: any) {
    console.log('todo app updates', props);
}

