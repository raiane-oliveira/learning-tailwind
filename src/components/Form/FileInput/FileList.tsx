'use client'

import { useFileInput } from './Root'
import { FileItem } from './FileItem'

export function FileList() {
  const { files, deleteFiles } = useFileInput()

  function handleDeleteFile(name: string) {
    deleteFiles(name)
  }

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FileItem
            state="error"
            key={file.name}
            name={file.name}
            size={file.size}
          />
        )
      })}
    </div>
  )
}
