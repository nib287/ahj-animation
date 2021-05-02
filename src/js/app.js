import '../css/style.css';
import CollapseWidget from './collapseWidget.js';
import CallbackWidget from './callbackWidget.js';
import LikekWidget from './likekWidget.js';

const collapseWidget = new CollapseWidget();
const callbackWidget = new CallbackWidget();
const likekWidget = new LikekWidget();
collapseWidget.init();
callbackWidget.init();
likekWidget.init();