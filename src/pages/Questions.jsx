import { useEffect } from "react";

export default function Questions(props) {

  const apiUrl = "https://opentdb.com/api.php?amount=5&category=14&difficulty=hard&type=multiple"

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch(apiUrl)
      const data = await res.json()
      console.log(data)
    }
    getQuestions()
  }, [])

  return (
    <h2>Here are the questions</h2>
  )
}
