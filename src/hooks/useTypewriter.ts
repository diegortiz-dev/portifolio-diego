"use client"

import { useState, useEffect, useRef } from "react"

interface UseTypewriterOptions {
  words: readonly string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

interface UseTypewriterReturn {
  displayText: string
  isTyping: boolean
  currentWordIndex: number
}

export function useTypewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    const tick = () => {
      if (!isDeleting && displayText === currentWord) {
        // Palavra completa, pausa antes de deletar
        timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration)
      } else if (isDeleting && displayText === "") {
        // Deletou tudo, vai para próxima palavra
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      } else {
        // Digitando ou deletando
        const speed = isDeleting ? deletingSpeed : typingSpeed
        timeoutRef.current = setTimeout(() => {
          setDisplayText((prev) =>
            isDeleting
              ? currentWord.substring(0, prev.length - 1)
              : currentWord.substring(0, prev.length + 1)
          )
        }, speed)
      }
    }

    tick()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [displayText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return {
    displayText,
    isTyping: !isDeleting,
    currentWordIndex,
  }
}
