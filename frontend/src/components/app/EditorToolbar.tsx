import type { Editor } from '@tiptap/react'
import {
  Bold,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote,
  Redo2,
  Strikethrough,
  Table as TableIcon,
  Underline,
  Undo2,
} from 'lucide-react'
import { editorPage } from '../../data/app.ts'
import { useToolbarState } from '../../lib/editor/useEditorKit.ts'

interface ToolProps {
  label: string
  active?: boolean
  disabled?: boolean
  onClick: () => void
  children: React.ReactNode
}

function Tool({ label, active = false, disabled = false, onClick, children }: ToolProps) {
  return (
    <button
      className={`tool${active ? ' tool--active' : ''}`}
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default function EditorToolbar({ editor }: { editor: Editor }) {
  const state = useToolbarState(editor)

  return (
    <div className="bar">
      <div className="bar__group" role="group" aria-label="Formato">
        <Tool
          label="Negrita"
          active={state.bold}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={16} aria-hidden="true" />
        </Tool>
        <Tool
          label="Cursiva"
          active={state.italic}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={16} aria-hidden="true" />
        </Tool>
        <Tool
          label="Subrayado"
          active={state.underline}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline size={16} aria-hidden="true" />
        </Tool>
        <Tool
          label="Tachado"
          active={state.strike}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough size={16} aria-hidden="true" />
        </Tool>
      </div>

      <div className="bar__group" role="group" aria-label="Bloque">
        <Tool
          label="Título 2"
          active={state.heading2}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          <span className="tool__text">H2</span>
        </Tool>
        <Tool
          label="Título 3"
          active={state.heading3}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          <span className="tool__text">H3</span>
        </Tool>
        <Tool
          label="Lista"
          active={state.bulletList}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={16} aria-hidden="true" />
        </Tool>
        <Tool
          label="Lista numerada"
          active={state.orderedList}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered size={16} aria-hidden="true" />
        </Tool>
        <Tool
          label="Cita"
          active={state.blockquote}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Quote size={16} aria-hidden="true" />
        </Tool>
        <Tool
          label="Enlace"
          active={state.link}
          onClick={() => editor.chain().focus().toggleLink({ href: 'https://' }).run()}
        >
          <LinkIcon size={16} aria-hidden="true" />
        </Tool>
        <Tool
          label={editorPage.insertTable}
          active={state.table}
          onClick={() =>
            editor
              .chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          }
        >
          <TableIcon size={16} aria-hidden="true" />
        </Tool>
      </div>

      <div className="bar__group" role="group" aria-label="Historial">
        <Tool
          label="Deshacer"
          disabled={!state.canUndo}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <Undo2 size={16} aria-hidden="true" />
        </Tool>
        <Tool
          label="Rehacer"
          disabled={!state.canRedo}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Redo2 size={16} aria-hidden="true" />
        </Tool>
      </div>

      <p className="bar__count tabular">
        {state.words} {editorPage.words}
      </p>
    </div>
  )
}
