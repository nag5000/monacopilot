import {CursorPosition, EditorModel, InlineCompletionContext} from '../types';
import {
  isCursorAtStartWithTextAround,
  isSelectedSuggestionMismatched,
} from '../utils';

export class CompletionValidator {
  private cursorPos: CursorPosition;
  private mdl: EditorModel;
  private ctx: InlineCompletionContext;

  /**
   * Initializes the validator with the current cursor position, editor model, and language.
   * @param cursorPos - The current cursor position.
   * @param mdl - The editor model.
   * @param language - The language of the editor.
   */
  constructor(
    cursorPos: CursorPosition,
    mdl: EditorModel,
    ctx: InlineCompletionContext,
  ) {
    this.cursorPos = cursorPos;
    this.mdl = mdl;
    this.ctx = ctx;
  }

  /**
   * Determines whether completions should be provided based on various conditions.
   * @returns {boolean} - True if completions should be provided, false otherwise.
   */
  public shouldProvideCompletions(): boolean {
    return (
      !isCursorAtStartWithTextAround(this.cursorPos, this.mdl) &&
      !isSelectedSuggestionMismatched(this.mdl, this.ctx)
    );
  }
}
