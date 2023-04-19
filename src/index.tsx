import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { unmountComponentAtNode } from "react-dom"
import "./public-path"

const render = (props: any) => {
  const { container } = props;
  const root = ReactDOM.createRoot(
    container ? container.querySelector('#root') : document.querySelector('#root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.log(window)
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (process.env.NODE_ENV === 'development') {
  window.qiankunLifecycle = {
        bootstrap,
        mount,
      unmount,
      };
}
