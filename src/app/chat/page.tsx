"use client"  

import ChatComponent from '@/components/chatComp/ChatComponent'
import { useAppSelector } from '@/store/hooks'
import { useEffect } from 'react'
import { useRouter } from "next/navigation";

export default function ChatPage() {
  return (
    <main className="flex min-h-screen mw-full">
      <ChatComponent />
    </main>
  )
}