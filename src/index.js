


import React from 'react';
import ReactDOM from 'react-dom/client'; // استيراد createRoot من react-dom/client
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import JS (لو محتاجه)
import { Provider } from 'react-redux'; // استيراد Provider من react-redux
import store from './redux/store'; // استيراد Redux Store
import App from './App';
import './index.css'; // استيراد التنسيقات

// إنشاء root جديد باستخدام createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* تغليف App بـ Provider */}
 
        <App />
      
    </Provider>
  </React.StrictMode>
);

