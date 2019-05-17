import noop from './noop.js';

export default (list = [], fn = noop, scope = null) => list.every(fn, scope);
