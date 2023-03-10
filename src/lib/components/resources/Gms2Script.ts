import {
  findOuterFunctions,
  findTokenReferences,
} from '../../parser/codeParser';
import { GmlToken } from '../../parser/GmlToken';
import type { YyScript } from '../../../types/Yy';
import paths from '../../paths';
import {
  Gms2ResourceBase,
  Gms2ResourceBaseParameters,
} from './Gms2ResourceBase';
import type { Gms2ProjectComms } from '../../Gms2Project.js';

export class Gms2Script extends Gms2ResourceBase {
  protected yyData!: YyScript; // Happens in the super() constructor
  private codeCache: string | undefined;
  private globalFunctionCache?: GmlToken[];

  constructor(...setup: Gms2ResourceBaseParameters) {
    super('scripts', ...setup);
  }

  protected createYyFile() {
    const yyData: YyScript = {
      name: this.name,
      tags: [],
      parent: Gms2Script.parentDefault,
      resourceVersion: '1.0',
      resourceType: 'GMScript',
      isDnD: false,
      isCompatibility: false,
    };
    this.storage.writeJson(this.yyPathAbsolute, yyData);
  }

  get codeFilePathAbsolute() {
    return paths.join(this.yyDirAbsolute, `${this.name}.gml`);
  }

  set code(code: string) {
    this.purgeCaches();
    this.codeCache = code;
    this.storage.writeBlob(this.codeFilePathAbsolute, this.codeCache, '\r\n');
  }

  get code() {
    this.codeCache ??= this.storage
      .readBlob(this.codeFilePathAbsolute)
      .toString();
    return this.codeCache;
  }

  /**
   * Get all functions defined in this script that will be globally available.
   * (Only returns outer-scope named functions.)
   */
  get globalFunctions() {
    try {
      this.globalFunctionCache ||= findOuterFunctions(this.code, this);
      return this.globalFunctionCache;
    } catch (err) {
      console.log(
        `Failed to lint the gml code in this script resource: ${this.name}`,
      );
      throw err;
    }
  }

  /**
   * Find all references to a token. ⚠ WARNING: does not consider scope or type!
   */
  findTokenReferences(
    token: GmlToken,
    options?: { suffix?: string; includeSelf?: boolean },
  ) {
    return findTokenReferences(this.code, token, {
      resource: this,
      suffixPattern: options?.suffix,
      includeSelf: options?.includeSelf,
    });
  }

  private purgeCaches() {
    this.codeCache = undefined;
    this.globalFunctionCache = undefined;
  }

  static create(name: string, code: string, comms: Gms2ProjectComms) {
    const script = new Gms2Script(name, comms, true);
    script.code = code;
    return script;
  }
}
