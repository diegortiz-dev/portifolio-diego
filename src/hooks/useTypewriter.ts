"use client"

import { useState, useEffect, useCallback } from "react"

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

  const currentWord = words[currentWordIndex]

  const handleTyping = useCallback(() => {
    if (!isDeleting && displayText === currentWord) {
      // Palavra completa, pausa antes de deletar
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === "") {
      // Deletou tudo, vai para próxima palavra
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
      return
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWord, words.length, typingSpeed, deletingSpeed, pauseDuration])

  useEffect(() => {
    const cleanup = handleTyping()
    return cleanup
  }, [handleTyping])

  return {
    displayText,
    isTyping: !isDeleting,
    currentWordIndex,
  }
}
