'use client'
import { Folder } from '@/lib/supabase/supabase.types'
import React, { useEffect, useState } from 'react'

interface FoldersDropdownListProps {
  workspaceFolders: Folder[]
  workspaceId: string
}

const FoldersDropdownList: React.FC<FoldersDropdownListProps> = ({
  workspaceFolders,
  workspaceId,
}) => {
  return (
    <>
      <div
        className="flex
        sticky 
        z-20 
        top-0 
        bg-background 
        w-full  
        h-10 
        group/title 
        justify-between 
        items-center 
        pr-4 
        text-Neutrals/neutrals-8
  "
      ></div>
    </>
  )
}

export default FoldersDropdownList
