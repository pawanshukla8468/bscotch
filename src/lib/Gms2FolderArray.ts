/** @file Extend the generic Gms2ComponentArray to add folders-specific contents */

import { YypFolder } from "../types/YypComponents";
import { Gms2ComponentArray } from "./components/Gms2ComponentArray";
import { Gms2Folder } from "./components/Gms2Folder";

export class Gms2FolderArray extends Gms2ComponentArray<YypFolder,typeof Gms2Folder> {
  constructor(data:YypFolder[]){
    super(data,Gms2Folder);
  }

  /**
   * Given a "module" name, find all folders making up that module.
   * For example, for module "BscotchPack" any folder (as seen in the IDE)
   * ending with "/BscotchPack" is part of that module. Case-insensitive.
   */
  findModuleFolders(module:string){
    this.items.filter(item=>{
      const subdirs = item.path.split('/');
      return subdirs[subdirs.length-1].toLocaleLowerCase() == module.toLocaleLowerCase();
    });
  }
}