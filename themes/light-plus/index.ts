import * as monaco from 'monaco-editor';

export default {
  base: 'vs',
  inherit: false,
  colors: {
    'actionBar.toggledBackground': '#dddddd',
    'activityBarBadge.background': '#007ACC',
    'checkbox.border': '#919191',
    'editor.background': '#FFFFFF',
    'editor.foreground': '#000000',
    'editor.inactiveSelectionBackground': '#E5EBF1',
    'editor.selectionHighlightBackground': '#ADD6FF80',
    'editorIndentGuide.activeBackground': '#939393',
    'editorIndentGuide.background': '#D3D3D3',
    'editorSuggestWidget.background': '#F3F3F3',
    'input.placeholderForeground': '#767676',
    'list.activeSelectionIconForeground': '#FFFFFF',
    'list.focusAndSelectionOutline': '#90C2F9',
    'list.hoverBackground': '#E8E8E8',
    'menu.border': '#D4D4D4',
    'notebook.cellBorderColor': '#E8E8E8',
    'notebook.selectedCellBackground': '#c8ddf150',
    'ports.iconRunningProcessForeground': '#369432',
    'searchEditor.textInputBorder': '#CECECE',
    'settings.numberInputBorder': '#CECECE',
    'settings.textInputBorder': '#CECECE',
    'sideBarSectionHeader.background': '#00000000',
    'sideBarSectionHeader.border': '#61616130',
    'sideBarTitle.foreground': '#6F6F6F',
    'statusBarItem.errorBackground': '#c72e0f',
    'statusBarItem.remoteBackground': '#16825D',
    'statusBarItem.remoteForeground': '#FFFFFF',
    'tab.lastPinnedBorder': '#61616130',
    'terminal.inactiveSelectionBackground': '#E5EBF1',
    'widget.border': '#d4d4d4',
  },
  rules: [
    {
      token: 'meta.embedded',
      foreground: '000000ff',
    },
    {
      token: 'source.groovy.embedded',
      foreground: '000000ff',
    },
    {
      token: 'string meta.image.inline.markdown',
      foreground: '000000ff',
    },
    {
      token: 'variable.legacy.builtin.python',
      foreground: '000000ff',
    },
    {
      token: 'meta.diff.header',
      foreground: '000080',
    },
    {
      token: 'comment',
      foreground: '008000',
    },
    {
      token: 'constant.language',
      foreground: '0000ff',
    },
    {
      token: 'constant.numeric',
      foreground: '098658',
    },
    {
      token: 'variable.other.enummember',
      foreground: '098658',
    },
    {
      token: 'keyword.operator.plus.exponent',
      foreground: '098658',
    },
    {
      token: 'keyword.operator.minus.exponent',
      foreground: '098658',
    },
    {
      token: 'constant.regexp',
      foreground: '811f3f',
    },
    {
      token: 'entity.name.tag',
      foreground: '800000',
    },
    {
      token: 'entity.name.selector',
      foreground: '800000',
    },
    {
      token: 'entity.other.attribute-name',
      foreground: 'e50000',
    },
    {
      token: 'entity.other.attribute-name.class.css',
      foreground: '800000',
    },
    {
      token: 'entity.other.attribute-name.class.mixin.css',
      foreground: '800000',
    },
    {
      token: 'entity.other.attribute-name.id.css',
      foreground: '800000',
    },
    {
      token: 'entity.other.attribute-name.parent-selector.css',
      foreground: '800000',
    },
    {
      token: 'entity.other.attribute-name.pseudo-class.css',
      foreground: '800000',
    },
    {
      token: 'entity.other.attribute-name.pseudo-element.css',
      foreground: '800000',
    },
    {
      token: 'source.css.less entity.other.attribute-name.id',
      foreground: '800000',
    },
    {
      token: 'entity.other.attribute-name.scss',
      foreground: '800000',
    },
    {
      token: 'invalid',
      foreground: 'cd3131',
    },
    {
      token: 'markup.bold',
      foreground: '000080',
    },
    {
      token: 'markup.heading',
      foreground: '800000',
    },
    {
      token: 'markup.inserted',
      foreground: '098658',
    },
    {
      token: 'markup.deleted',
      foreground: 'a31515',
    },
    {
      token: 'markup.changed',
      foreground: '0451a5',
    },
    {
      token: 'punctuation.definition.quote.begin.markdown',
      foreground: '0451a5',
    },
    {
      token: 'punctuation.definition.list.begin.markdown',
      foreground: '0451a5',
    },
    {
      token: 'markup.inline.raw',
      foreground: '800000',
    },
    {
      token: 'punctuation.definition.tag',
      foreground: '800000',
    },
    {
      token: 'meta.preprocessor',
      foreground: '0000ff',
    },
    {
      token: 'entity.name.function.preprocessor',
      foreground: '0000ff',
    },
    {
      token: 'meta.preprocessor.string',
      foreground: 'a31515',
    },
    {
      token: 'meta.preprocessor.numeric',
      foreground: '098658',
    },
    {
      token: 'meta.structure.dictionary.key.python',
      foreground: '0451a5',
    },
    {
      token: 'storage',
      foreground: '0000ff',
    },
    {
      token: 'storage.type',
      foreground: '0000ff',
    },
    {
      token: 'storage.modifier',
      foreground: '0000ff',
    },
    {
      token: 'keyword.operator.noexcept',
      foreground: '0000ff',
    },
    {
      token: 'string',
      foreground: 'a31515',
    },
    {
      token: 'meta.embedded.assembly',
      foreground: 'a31515',
    },
    {
      token: 'string.comment.buffered.block.pug',
      foreground: '0000ff',
    },
    {
      token: 'string.quoted.pug',
      foreground: '0000ff',
    },
    {
      token: 'string.interpolated.pug',
      foreground: '0000ff',
    },
    {
      token: 'string.unquoted.plain.in.yaml',
      foreground: '0000ff',
    },
    {
      token: 'string.unquoted.plain.out.yaml',
      foreground: '0000ff',
    },
    {
      token: 'string.unquoted.block.yaml',
      foreground: '0000ff',
    },
    {
      token: 'string.quoted.single.yaml',
      foreground: '0000ff',
    },
    {
      token: 'string.quoted.double.xml',
      foreground: '0000ff',
    },
    {
      token: 'string.quoted.single.xml',
      foreground: '0000ff',
    },
    {
      token: 'string.unquoted.cdata.xml',
      foreground: '0000ff',
    },
    {
      token: 'string.quoted.double.html',
      foreground: '0000ff',
    },
    {
      token: 'string.quoted.single.html',
      foreground: '0000ff',
    },
    {
      token: 'string.unquoted.html',
      foreground: '0000ff',
    },
    {
      token: 'string.quoted.single.handlebars',
      foreground: '0000ff',
    },
    {
      token: 'string.quoted.double.handlebars',
      foreground: '0000ff',
    },
    {
      token: 'string.regexp',
      foreground: '811f3f',
    },
    {
      token: 'punctuation.definition.template-expression.begin',
      foreground: '0000ff',
    },
    {
      token: 'punctuation.definition.template-expression.end',
      foreground: '0000ff',
    },
    {
      token: 'punctuation.section.embedded',
      foreground: '0000ff',
    },
    {
      token: 'meta.template.expression',
      foreground: '000000',
    },
    {
      token: 'support.constant.property-value',
      foreground: '0451a5',
    },
    {
      token: 'support.constant.font-name',
      foreground: '0451a5',
    },
    {
      token: 'support.constant.media-type',
      foreground: '0451a5',
    },
    {
      token: 'support.constant.media',
      foreground: '0451a5',
    },
    {
      token: 'constant.other.color.rgb-value',
      foreground: '0451a5',
    },
    {
      token: 'constant.other.rgb-value',
      foreground: '0451a5',
    },
    {
      token: 'support.constant.color',
      foreground: '0451a5',
    },
    {
      token: 'support.type.vendored.property-name',
      foreground: 'e50000',
    },
    {
      token: 'support.type.property-name',
      foreground: 'e50000',
    },
    {
      token: 'variable.css',
      foreground: 'e50000',
    },
    {
      token: 'variable.scss',
      foreground: 'e50000',
    },
    {
      token: 'variable.other.less',
      foreground: 'e50000',
    },
    {
      token: 'source.coffee.embedded',
      foreground: 'e50000',
    },
    {
      token: 'support.type.property-name.json',
      foreground: '0451a5',
    },
    {
      token: 'keyword',
      foreground: '0000ff',
    },
    {
      token: 'keyword.control',
      foreground: '0000ff',
    },
    {
      token: 'keyword.operator',
      foreground: '000000',
    },
    {
      token: 'keyword.operator.new',
      foreground: '0000ff',
    },
    {
      token: 'keyword.operator.expression',
      foreground: '0000ff',
    },
    {
      token: 'keyword.operator.cast',
      foreground: '0000ff',
    },
    {
      token: 'keyword.operator.sizeof',
      foreground: '0000ff',
    },
    {
      token: 'keyword.operator.alignof',
      foreground: '0000ff',
    },
    {
      token: 'keyword.operator.typeid',
      foreground: '0000ff',
    },
    {
      token: 'keyword.operator.alignas',
      foreground: '0000ff',
    },
    {
      token: 'keyword.operator.instanceof',
      foreground: '0000ff',
    },
    {
      token: 'keyword.operator.logical.python',
      foreground: '0000ff',
    },
    {
      token: 'keyword.operator.wordlike',
      foreground: '0000ff',
    },
    {
      token: 'keyword.other.unit',
      foreground: '098658',
    },
    {
      token: 'punctuation.section.embedded.begin.php',
      foreground: '800000',
    },
    {
      token: 'punctuation.section.embedded.end.php',
      foreground: '800000',
    },
    {
      token: 'support.function.git-rebase',
      foreground: '0451a5',
    },
    {
      token: 'constant.sha.git-rebase',
      foreground: '098658',
    },
    {
      token: 'storage.modifier.import.java',
      foreground: '000000',
    },
    {
      token: 'variable.language.wildcard.java',
      foreground: '000000',
    },
    {
      token: 'storage.modifier.package.java',
      foreground: '000000',
    },
    {
      token: 'variable.language',
      foreground: '0000ff',
    },
    {
      token: 'entity.name.function',
      foreground: '795E26',
    },
    {
      token: 'support.function',
      foreground: '795E26',
    },
    {
      token: 'support.constant.handlebars',
      foreground: '795E26',
    },
    {
      token: 'source.powershell variable.other.member',
      foreground: '795E26',
    },
    {
      token: 'entity.name.operator.custom-literal',
      foreground: '795E26',
    },
    {
      token: 'support.class',
      foreground: '267f99',
    },
    {
      token: 'support.type',
      foreground: '267f99',
    },
    {
      token: 'entity.name.type',
      foreground: '267f99',
    },
    {
      token: 'entity.name.namespace',
      foreground: '267f99',
    },
    {
      token: 'entity.other.attribute',
      foreground: '267f99',
    },
    {
      token: 'entity.name.scope-resolution',
      foreground: '267f99',
    },
    {
      token: 'entity.name.class',
      foreground: '267f99',
    },
    {
      token: 'storage.type.numeric.go',
      foreground: '267f99',
    },
    {
      token: 'storage.type.byte.go',
      foreground: '267f99',
    },
    {
      token: 'storage.type.boolean.go',
      foreground: '267f99',
    },
    {
      token: 'storage.type.string.go',
      foreground: '267f99',
    },
    {
      token: 'storage.type.uintptr.go',
      foreground: '267f99',
    },
    {
      token: 'storage.type.error.go',
      foreground: '267f99',
    },
    {
      token: 'storage.type.rune.go',
      foreground: '267f99',
    },
    {
      token: 'storage.type.cs',
      foreground: '267f99',
    },
    {
      token: 'storage.type.generic.cs',
      foreground: '267f99',
    },
    {
      token: 'storage.type.modifier.cs',
      foreground: '267f99',
    },
    {
      token: 'storage.type.variable.cs',
      foreground: '267f99',
    },
    {
      token: 'storage.type.annotation.java',
      foreground: '267f99',
    },
    {
      token: 'storage.type.generic.java',
      foreground: '267f99',
    },
    {
      token: 'storage.type.java',
      foreground: '267f99',
    },
    {
      token: 'storage.type.object.array.java',
      foreground: '267f99',
    },
    {
      token: 'storage.type.primitive.array.java',
      foreground: '267f99',
    },
    {
      token: 'storage.type.primitive.java',
      foreground: '267f99',
    },
    {
      token: 'storage.type.token.java',
      foreground: '267f99',
    },
    {
      token: 'storage.type.groovy',
      foreground: '267f99',
    },
    {
      token: 'storage.type.annotation.groovy',
      foreground: '267f99',
    },
    {
      token: 'storage.type.parameters.groovy',
      foreground: '267f99',
    },
    {
      token: 'storage.type.generic.groovy',
      foreground: '267f99',
    },
    {
      token: 'storage.type.object.array.groovy',
      foreground: '267f99',
    },
    {
      token: 'storage.type.primitive.array.groovy',
      foreground: '267f99',
    },
    {
      token: 'storage.type.primitive.groovy',
      foreground: '267f99',
    },
    {
      token: 'meta.type.cast.expr',
      foreground: '267f99',
    },
    {
      token: 'meta.type.new.expr',
      foreground: '267f99',
    },
    {
      token: 'support.constant.math',
      foreground: '267f99',
    },
    {
      token: 'support.constant.dom',
      foreground: '267f99',
    },
    {
      token: 'support.constant.json',
      foreground: '267f99',
    },
    {
      token: 'entity.other.inherited-class',
      foreground: '267f99',
    },
    {
      token: 'keyword.control',
      foreground: 'AF00DB',
    },
    {
      token: 'source.cpp keyword.operator.new',
      foreground: 'AF00DB',
    },
    {
      token: 'source.cpp keyword.operator.delete',
      foreground: 'AF00DB',
    },
    {
      token: 'keyword.other.using',
      foreground: 'AF00DB',
    },
    {
      token: 'keyword.other.directive.using',
      foreground: 'AF00DB',
    },
    {
      token: 'keyword.other.operator',
      foreground: 'AF00DB',
    },
    {
      token: 'entity.name.operator',
      foreground: 'AF00DB',
    },
    {
      token: 'variable',
      foreground: '001080',
    },
    {
      token: 'meta.definition.variable.name',
      foreground: '001080',
    },
    {
      token: 'support.variable',
      foreground: '001080',
    },
    {
      token: 'entity.name.variable',
      foreground: '001080',
    },
    {
      token: 'constant.other.placeholder',
      foreground: '001080',
    },
    {
      token: 'variable.other.constant',
      foreground: '0070C1',
    },
    {
      token: 'variable.other.enummember',
      foreground: '0070C1',
    },
    {
      token: 'meta.object-literal.key',
      foreground: '001080',
    },
    {
      token: 'support.constant.property-value',
      foreground: '0451a5',
    },
    {
      token: 'support.constant.font-name',
      foreground: '0451a5',
    },
    {
      token: 'support.constant.media-type',
      foreground: '0451a5',
    },
    {
      token: 'support.constant.media',
      foreground: '0451a5',
    },
    {
      token: 'constant.other.color.rgb-value',
      foreground: '0451a5',
    },
    {
      token: 'constant.other.rgb-value',
      foreground: '0451a5',
    },
    {
      token: 'support.constant.color',
      foreground: '0451a5',
    },
    {
      token: 'punctuation.definition.group.regexp',
      foreground: 'd16969',
    },
    {
      token: 'punctuation.definition.group.assertion.regexp',
      foreground: 'd16969',
    },
    {
      token: 'punctuation.definition.character-class.regexp',
      foreground: 'd16969',
    },
    {
      token: 'punctuation.character.set.begin.regexp',
      foreground: 'd16969',
    },
    {
      token: 'punctuation.character.set.end.regexp',
      foreground: 'd16969',
    },
    {
      token: 'keyword.operator.negation.regexp',
      foreground: 'd16969',
    },
    {
      token: 'support.other.parenthesis.regexp',
      foreground: 'd16969',
    },
    {
      token: 'constant.character.character-class.regexp',
      foreground: '811f3f',
    },
    {
      token: 'constant.other.character-class.set.regexp',
      foreground: '811f3f',
    },
    {
      token: 'constant.other.character-class.regexp',
      foreground: '811f3f',
    },
    {
      token: 'constant.character.set.regexp',
      foreground: '811f3f',
    },
    {
      token: 'keyword.operator.quantifier.regexp',
      foreground: '000000',
    },
    {
      token: 'keyword.operator.or.regexp',
      foreground: 'EE0000',
    },
    {
      token: 'keyword.control.anchor.regexp',
      foreground: 'EE0000',
    },
    {
      token: 'constant.character',
      foreground: '0000ff',
    },
    {
      token: 'constant.other.option',
      foreground: '0000ff',
    },
    {
      token: 'constant.character.escape',
      foreground: 'EE0000',
    },
    {
      token: 'entity.name.label',
      foreground: '000000',
    },
  ],
} as const satisfies monaco.editor.IStandaloneThemeData;
