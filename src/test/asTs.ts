import { Gms2AsTypescript } from '../lib/Gms2AsTypescript.js';
import { expect } from 'chai';
import { sandboxRoot, resetSandbox } from './lib/util';

function getResetProjectAsTypescript() {
  resetSandbox();
  return new Gms2AsTypescript({
    projectPath: sandboxRoot,
  });
}

xdescribe('Typescript Transpiler', () => {
  it('can load', () => {
    const mirror = getResetProjectAsTypescript();
  });
});
