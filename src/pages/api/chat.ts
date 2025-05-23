// pages/api/chat.ts
import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({
  apiKey: process.env.OPENAI_KEY
})
const openai = new OpenAIApi(config)

export default async function handler(req, res) {
  const { messages } = req.body
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages
  })
  res.status(200).json(response.data.choices[0].message)
}