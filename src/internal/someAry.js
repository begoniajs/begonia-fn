import noop from './noop.js';

export default (list = [], fn = noop, scope = null) => list.some(fn, scope);
