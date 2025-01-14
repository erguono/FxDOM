import { tap, go, each, defaults } from 'fxjs2';
import filterL from 'fxjs2/Lazy/filterL.js'
import findAll from './findAll.js';

export default (event, sel, f) => tap(el =>
  el.addEventListener(event, e => go(
    el,
    findAll(sel),
    filterL(el => el.contains(e.target)),
    each(currentTarget => f(defaults({ originalEvent: e, currentTarget, delegateTarget: el }, e)))
  ))
);