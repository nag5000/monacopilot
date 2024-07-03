import * as monaco from 'monaco-editor';

export default {
  base: 'vs-dark',
  inherit: false,
  colors: {
    'actionBar.toggledBackground': '#383a49',
    'activityBarBadge.background': '#007ACC',
    'checkbox.border': '#6B6B6B',
    'editor.background': '#1E1E1E',
    'editor.foreground': '#D4D4D4',
    'editor.inactiveSelectionBackground': '#3A3D41',
    'editor.selectionHighlightBackground': '#ADD6FF26',
    'editorIndentGuide.activeBackground': '#707070',
    'editorIndentGuide.background': '#404040',
    'input.placeholderForeground': '#A6A6A6',
    'list.activeSelectionIconForeground': '#FFFFFF',
    'list.dropBackground': '#383B3D',
    'menu.background': '#252526',
    'menu.border': '#454545',
    'menu.foreground': '#CCCCCC',
    'menu.separatorBackground': '#454545',
    'ports.iconRunningProcessForeground': '#369432',
    'sideBarSectionHeader.background': '#00000000',
    'sideBarSectionHeader.border': '#cccccc33',
    'sideBarTitle.foreground': '#BBBBBB',
    'statusBarItem.remoteBackground': '#16825D',
    'statusBarItem.remoteForeground': '#FFFFFF',
    'tab.lastPinnedBorder': '#cccccc33',
    'terminal.inactiveSelectionBackground': '#3A3D41',
    'widget.border': '#303031',
  },
  rules: [
    {
      token: 'meta.embedded',
      foreground: 'D4D4D4',
    },
    {
      token: 'source.groovy.embedded',
      foreground: 'D4D4D4',
    },
    {
      token: 'string meta.image.inline.markdown',
      foreground: 'D4D4D4',
    },
    {
      token: 'variable.legacy.builtin.python',
      foreground: 'D4D4D4',
    },
    {
      token: 'header',
      foreground: '000080',
    },
    {
      token: 'comment',
      foreground: '6A9955',
    },
    {
      token: 'constant.language',
      foreground: '569cd6',
    },
    {
      token: 'constant.numeric',
      foreground: 'b5cea8',
    },
    {
      token: 'variable.other.enummember',
      foreground: 'b5cea8',
    },
    {
      token: 'keyword.operator.plus.exponent',
      foreground: 'b5cea8',
    },
    {
      token: 'keyword.operator.minus.exponent',
      foreground: 'b5cea8',
    },
    {
      token: 'constant.regexp',
      foreground: '646695',
    },
    {
      token: 'entity.name.tag',
      foreground: '569cd6',
    },
    {
      token: 'entity.name.tag.css',
      foreground: 'd7ba7d',
    },
    {
      token: 'entity.other.attribute-name',
      foreground: '9cdcfe',
    },
    {
      token: 'entity.other.attribute-name.class.css',
      foreground: 'd7ba7d',
    },
    {
      token: 'entity.other.attribute-name.class.mixin.css',
      foreground: 'd7ba7d',
    },
    {
      token: 'entity.other.attribute-name.id.css',
      foreground: 'd7ba7d',
    },
    {
      token: 'entity.other.attribute-name.parent-selector.css',
      foreground: 'd7ba7d',
    },
    {
      token: 'entity.other.attribute-name.pseudo-class.css',
      foreground: 'd7ba7d',
    },
    {
      token: 'entity.other.attribute-name.pseudo-element.css',
      foreground: 'd7ba7d',
    },
    {
      token: 'source.css.less entity.other.attribute-name.id',
      foreground: 'd7ba7d',
    },
    {
      token: 'entity.other.attribute-name.scss',
      foreground: 'd7ba7d',
    },
    {
      token: 'invalid',
      foreground: 'f44747',
    },
    {
      token: 'markup.bold',
      foreground: '569cd6',
    },
    {
      token: 'markup.heading',
      foreground: '569cd6',
    },
    {
      token: 'markup.inserted',
      foreground: 'b5cea8',
    },
    {
      token: 'markup.deleted',
      foreground: 'ce9178',
    },
    {
      token: 'markup.changed',
      foreground: '569cd6',
    },
    {
      token: 'punctuation.definition.quote.begin.markdown',
      foreground: '6A9955',
    },
    {
      token: 'punctuation.definition.list.begin.markdown',
      foreground: '6796e6',
    },
    {
      token: 'markup.inline.raw',
      foreground: 'ce9178',
    },
    {
      token: 'punctuation.definition.tag',
      foreground: '808080',
    },
    {
      token: 'meta.preprocessor',
      foreground: '569cd6',
    },
    {
      token: 'entity.name.function.preprocessor',
      foreground: '569cd6',
    },
    {
      token: 'meta.preprocessor.string',
      foreground: 'ce9178',
    },
    {
      token: 'meta.preprocessor.numeric',
      foreground: 'b5cea8',
    },
    {
      token: 'meta.structure.dictionary.key.python',
      foreground: '9cdcfe',
    },
    {
      token: 'meta.diff.header',
      foreground: '569cd6',
    },
    {
      token: 'storage',
      foreground: '569cd6',
    },
    {
      token: 'storage.type',
      foreground: '569cd6',
    },
    {
      token: 'storage.modifier',
      foreground: '569cd6',
    },
    {
      token: 'keyword.operator.noexcept',
      foreground: '569cd6',
    },
    {
      token: 'string',
      foreground: 'ce9178',
    },
    {
      token: 'meta.embedded.assembly',
      foreground: 'ce9178',
    },
    {
      token: 'string.tag',
      foreground: 'ce9178',
    },
    {
      token: 'string.value',
      foreground: 'ce9178',
    },
    {
      token: 'string.regexp',
      foreground: 'd16969',
    },
    {
      token: 'punctuation.definition.template-expression.begin',
      foreground: '569cd6',
    },
    {
      token: 'punctuation.definition.template-expression.end',
      foreground: '569cd6',
    },
    {
      token: 'punctuation.section.embedded',
      foreground: '569cd6',
    },
    {
      token: 'meta.template.expression',
      foreground: 'd4d4d4',
    },
    {
      token: 'support.type.vendored.property-name',
      foreground: '9cdcfe',
    },
    {
      token: 'support.type.property-name',
      foreground: '9cdcfe',
    },
    {
      token: 'variable.css',
      foreground: '9cdcfe',
    },
    {
      token: 'variable.scss',
      foreground: '9cdcfe',
    },
    {
      token: 'variable.other.less',
      foreground: '9cdcfe',
    },
    {
      token: 'source.coffee.embedded',
      foreground: '9cdcfe',
    },
    {
      token: 'keyword',
      foreground: '569cd6',
    },
    {
      token: 'keyword.control',
      foreground: '569cd6',
    },
    {
      token: 'keyword.operator',
      foreground: 'd4d4d4',
    },
    {
      token: 'keyword.operator.new',
      foreground: '569cd6',
    },
    {
      token: 'keyword.operator.expression',
      foreground: '569cd6',
    },
    {
      token: 'keyword.operator.cast',
      foreground: '569cd6',
    },
    {
      token: 'keyword.operator.sizeof',
      foreground: '569cd6',
    },
    {
      token: 'keyword.operator.alignof',
      foreground: '569cd6',
    },
    {
      token: 'keyword.operator.typeid',
      foreground: '569cd6',
    },
    {
      token: 'keyword.operator.alignas',
      foreground: '569cd6',
    },
    {
      token: 'keyword.operator.instanceof',
      foreground: '569cd6',
    },
    {
      token: 'keyword.operator.logical.python',
      foreground: '569cd6',
    },
    {
      token: 'keyword.operator.wordlike',
      foreground: '569cd6',
    },
    {
      token: 'keyword.other.unit',
      foreground: 'b5cea8',
    },
    {
      token: 'punctuation.section.embedded.begin.php',
      foreground: '569cd6',
    },
    {
      token: 'punctuation.section.embedded.end.php',
      foreground: '569cd6',
    },
    {
      token: 'support.function.git-rebase',
      foreground: '9cdcfe',
    },
    {
      token: 'constant.sha.git-rebase',
      foreground: 'b5cea8',
    },
    {
      token: 'storage.modifier.import.java',
      foreground: 'd4d4d4',
    },
    {
      token: 'variable.language.wildcard.java',
      foreground: 'd4d4d4',
    },
    {
      token: 'storage.modifier.package.java',
      foreground: 'd4d4d4',
    },
    {
      token: 'variable.language',
      foreground: '569cd6',
    },
    {
      token: 'entity.name.function',
      foreground: 'DCDCAA',
    },
    {
      token: 'support.function',
      foreground: 'DCDCAA',
    },
    {
      token: 'support.constant.handlebars',
      foreground: 'DCDCAA',
    },
    {
      token: 'source.powershell variable.other.member',
      foreground: 'DCDCAA',
    },
    {
      token: 'entity.name.operator.custom-literal',
      foreground: 'DCDCAA',
    },
    {
      token: 'support.class',
      foreground: '4EC9B0',
    },
    {
      token: 'support.type',
      foreground: '4EC9B0',
    },
    {
      token: 'entity.name.type',
      foreground: '4EC9B0',
    },
    {
      token: 'entity.name.namespace',
      foreground: '4EC9B0',
    },
    {
      token: 'entity.other.attribute',
      foreground: '4EC9B0',
    },
    {
      token: 'entity.name.scope-resolution',
      foreground: '4EC9B0',
    },
    {
      token: 'entity.name.class',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.numeric.go',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.byte.go',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.boolean.go',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.string.go',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.uintptr.go',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.error.go',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.rune.go',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.cs',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.generic.cs',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.modifier.cs',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.variable.cs',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.annotation.java',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.generic.java',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.java',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.object.array.java',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.primitive.array.java',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.primitive.java',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.token.java',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.groovy',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.annotation.groovy',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.parameters.groovy',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.generic.groovy',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.object.array.groovy',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.primitive.array.groovy',
      foreground: '4EC9B0',
    },
    {
      token: 'storage.type.primitive.groovy',
      foreground: '4EC9B0',
    },
    {
      token: 'meta.type.cast.expr',
      foreground: '4EC9B0',
    },
    {
      token: 'meta.type.new.expr',
      foreground: '4EC9B0',
    },
    {
      token: 'support.constant.math',
      foreground: '4EC9B0',
    },
    {
      token: 'support.constant.dom',
      foreground: '4EC9B0',
    },
    {
      token: 'support.constant.json',
      foreground: '4EC9B0',
    },
    {
      token: 'entity.other.inherited-class',
      foreground: '4EC9B0',
    },
    {
      token: 'keyword.control',
      foreground: 'C586C0',
    },
    {
      token: 'source.cpp keyword.operator.new',
      foreground: 'C586C0',
    },
    {
      token: 'keyword.operator.delete',
      foreground: 'C586C0',
    },
    {
      token: 'keyword.other.using',
      foreground: 'C586C0',
    },
    {
      token: 'keyword.other.directive.using',
      foreground: 'C586C0',
    },
    {
      token: 'keyword.other.operator',
      foreground: 'C586C0',
    },
    {
      token: 'entity.name.operator',
      foreground: 'C586C0',
    },
    {
      token: 'variable',
      foreground: '9CDCFE',
    },
    {
      token: 'meta.definition.variable.name',
      foreground: '9CDCFE',
    },
    {
      token: 'support.variable',
      foreground: '9CDCFE',
    },
    {
      token: 'entity.name.variable',
      foreground: '9CDCFE',
    },
    {
      token: 'constant.other.placeholder',
      foreground: '9CDCFE',
    },
    {
      token: 'variable.other.constant',
      foreground: '4FC1FF',
    },
    {
      token: 'variable.other.enummember',
      foreground: '4FC1FF',
    },
    {
      token: 'meta.object-literal.key',
      foreground: '9CDCFE',
    },
    {
      token: 'support.constant.property-value',
      foreground: 'CE9178',
    },
    {
      token: 'support.constant.font-name',
      foreground: 'CE9178',
    },
    {
      token: 'support.constant.media-type',
      foreground: 'CE9178',
    },
    {
      token: 'support.constant.media',
      foreground: 'CE9178',
    },
    {
      token: 'constant.other.color.rgb-value',
      foreground: 'CE9178',
    },
    {
      token: 'constant.other.rgb-value',
      foreground: 'CE9178',
    },
    {
      token: 'support.constant.color',
      foreground: 'CE9178',
    },
    {
      token: 'punctuation.definition.group.regexp',
      foreground: 'CE9178',
    },
    {
      token: 'punctuation.definition.group.assertion.regexp',
      foreground: 'CE9178',
    },
    {
      token: 'punctuation.definition.character-class.regexp',
      foreground: 'CE9178',
    },
    {
      token: 'punctuation.character.set.begin.regexp',
      foreground: 'CE9178',
    },
    {
      token: 'punctuation.character.set.end.regexp',
      foreground: 'CE9178',
    },
    {
      token: 'keyword.operator.negation.regexp',
      foreground: 'CE9178',
    },
    {
      token: 'support.other.parenthesis.regexp',
      foreground: 'CE9178',
    },
    {
      token: 'constant.character.character-class.regexp',
      foreground: 'd16969',
    },
    {
      token: 'constant.other.character-class.set.regexp',
      foreground: 'd16969',
    },
    {
      token: 'constant.other.character-class.regexp',
      foreground: 'd16969',
    },
    {
      token: 'constant.character.set.regexp',
      foreground: 'd16969',
    },
    {
      token: 'keyword.operator.or.regexp',
      foreground: 'DCDCAA',
    },
    {
      token: 'keyword.control.anchor.regexp',
      foreground: 'DCDCAA',
    },
    {
      token: 'keyword.operator.quantifier.regexp',
      foreground: 'd7ba7d',
    },
    {
      token: 'constant.character',
      foreground: '569cd6',
    },
    {
      token: 'constant.other.option',
      foreground: '569cd6',
    },
    {
      token: 'constant.character.escape',
      foreground: 'd7ba7d',
    },
    {
      token: 'entity.name.label',
      foreground: 'C8C8C8',
    },
  ],
} as const satisfies monaco.editor.IStandaloneThemeData;
