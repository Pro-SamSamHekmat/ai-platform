export default async function handler(req, res) {
  const { prompt } = req.body;
  const image = await generateImage(prompt);
  res.status(200).json({ image });
}