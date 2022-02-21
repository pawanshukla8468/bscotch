// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Activated');
}

// this method is called when your extension is deactivated
export function deactivate() {}

// TODO: Try LANGUAGE SERVER FORWARDING
// https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-embedded-request-forwarding
