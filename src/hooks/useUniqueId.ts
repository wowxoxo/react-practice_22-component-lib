import { customAlphabet } from "nanoid"
import { useState } from "react"

const nanoid = customAlphabet("0123456789abcdefg", 10)

export const useUniqueId = () => {
  const [uniqueId] = useState(nanoid())

  return uniqueId
}