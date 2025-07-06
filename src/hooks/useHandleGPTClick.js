// src/hooks/useHandleGPTClick.js

import { useDispatch } from 'react-redux'
import { addGPTMovieResults } from '../utils/gptSlice'
import { getGroqChatCompletion } from '../utils/groqAI'
import { options } from '../assets/APIS'
export const useHandleGPTClick = () => {
  const dispatch = useDispatch()

  const searchMovieTMDB = async (movieName) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movieName.trim()
      )}&include_adult=false&language=en-US&page=1`,
      options
    )
    const json = await res.json()
    return json.results
  }

  return async (searchRef) => {//Higher Order Compneont
    if (!searchRef.current) return

    const rawQuery = searchRef.current.value
    if (!rawQuery) return

    const gptQuery =
      "Recommend Movie Based on the Query :'" +
      rawQuery +
      "' Only give me 20 Movies with their names in comma separated format in one row. Do not give any other text or explanation. Just the names of the movies separated by commas."

    try {
      const chatCompletion = await getGroqChatCompletion(gptQuery)
      const content = chatCompletion.choices[0]?.message?.content || ''
      const movieNames = content.split(',').map((n) => n.trim()).filter(Boolean)
      const movieResults = await Promise.all(movieNames.map(searchMovieTMDB))

      dispatch(
        addGPTMovieResults({
          movieNames,
          movieResults
        })
      )
    } catch (err) {
      console.error('Groq API call failed:', err)
    }
  }
}