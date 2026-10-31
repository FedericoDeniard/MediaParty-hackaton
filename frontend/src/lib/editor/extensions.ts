import { Decoration, Extension } from '@tiptap/core'

/* ============================================================
   Pasaje: resalta en el cuerpo de la nota el fragmento literal
   que respalda una pieza de enriquecimiento aprobada.

   El resaltado no modifica el documento: es una decoración, así que
   el texto sigue siendo el que la autora escribió y el que el
   pipeline verifica.
   ============================================================ */

export interface PasajeStorage {
  fragments: string[]
}

declare module '@tiptap/core' {
  interface Storage {
    pasaje: PasajeStorage
  }
}

export const Pasaje = Extension.create<{}, PasajeStorage>({
  name: 'pasaje',

  addStorage() {
    return { fragments: [] }
  },

  addDecorations() {
    return {
      // 'document' reconstruye en cada cambio del documento: si la
      // autora escribe arriba del pasaje, la posición se corrige sola.
      update: 'document',

      create: ({ editor, state }) => {
        const fragments = editor.storage.pasaje.fragments
        if (fragments.length === 0) return []

        const decorations: Decoration[] = []

        state.doc.descendants((node, pos) => {
          if (!node.isText || !node.text) return

          for (const fragment of fragments) {
            if (!fragment) continue

            let index = node.text.indexOf(fragment)
            while (index !== -1) {
              const from = pos + index
              decorations.push(
                Decoration.Inline(from, from + fragment.length, { class: 'passage' }),
              )
              index = node.text.indexOf(fragment, index + fragment.length)
            }
          }
        })

        return decorations
      },
    }
  },
})

/* ============================================================
   Atajos: los que Tiptap no trae de serie.

   Tiptap ya cubre Mod-b/i/u, Mod-Shift-s, Mod-Shift-7/8/9 para
   listas y Mod-z/Mod-y. Lo que falta es lo de Word: hipervínculo,
   títulos por nivel y vuelta a párrafo.
   ============================================================ */

export const Atajos = Extension.create({
  name: 'atajos',

  addKeyboardShortcuts() {
    return {
      'Mod-k': () => {
        const previous = this.editor.getAttributes('link').href as string | undefined
        const href = window.prompt('Enlace', previous ?? 'https://')
        if (href === null) return true
        if (href === '') {
          this.editor.chain().focus().extendMarkRange('link').unsetLink().run()
          return true
        }
        this.editor.chain().focus().extendMarkRange('link').setLink({ href }).run()
        return true
      },
      'Mod-Alt-1': () => this.editor.chain().focus().toggleHeading({ level: 1 }).run(),
      'Mod-Alt-2': () => this.editor.chain().focus().toggleHeading({ level: 2 }).run(),
      'Mod-Alt-3': () => this.editor.chain().focus().toggleHeading({ level: 3 }).run(),
      'Mod-Shift-0': () => this.editor.chain().focus().setParagraph().run(),
    }
  },
})
