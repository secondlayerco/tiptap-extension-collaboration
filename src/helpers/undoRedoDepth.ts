import type { Editor } from '@tiptap/core'
import { yUndoPluginKey } from '@tiptap/y-tiptap'

/**
 * Get the current undo stack depth
 * @param editor - The Tiptap editor instance
 * @returns The number of items in the undo stack
 */
export function getUndoDepth(editor: Editor): number {
  return yUndoPluginKey.getState(editor.state).undoManager.undoStack.length
}

/**
 * Get the current redo stack depth
 * @param editor - The Tiptap editor instance
 * @returns The number of items in the redo stack
 */
export function getRedoDepth(editor: Editor): number {
  return yUndoPluginKey.getState(editor.state).undoManager.redoStack.length
}

