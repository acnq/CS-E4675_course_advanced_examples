import express from 'express';
import { calculator, Operation } from './calculator';
const app = express();

app.use(express.json())
app.get('/ping', (_req, res) => {
  res.send('pong');  
}); 

app.post('/calculate', (req, res) => {
  console.log('into calculate')
  console.log('req:', req.body)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op} = req.body;

  if (!value1 || isNaN(Number(value1))) {
    return res.send({ error: '...'}).status(400);
  }
   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculator(Number(value1), Number(value2), op as Operation);
  return res.status(200).json({result: result});
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})