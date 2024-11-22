import {CompletionFormatter} from '../classes';
import {
  EditorInlineCompletion,
  EditorInlineCompletionsResult,
  InlineCompletionContext,
} from '../types';

export const formatCompletion = (
  completion: string,
  ctx: InlineCompletionContext,
): string => {
  return CompletionFormatter.create(completion)
    .removeMarkdownCodeSyntax()
    .removeExcessiveNewlines()
    .removeInvalidLineBreaks()
    .withSelectedSuggestion(ctx.selectedSuggestionInfo)
    .build();
};

export const createInlineCompletionResult = (
  items: EditorInlineCompletion[],
): EditorInlineCompletionsResult => ({
  items,
  enableForwardStability: true,
});
