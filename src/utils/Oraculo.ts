import axios from 'axios';
import { OPENAIKEY } from '../config/env';

const OPENAI_API_KEY = OPENAIKEY;


async function ConsultaOraculo(jsonData: Record<string, unknown>, question: string): Promise<string> {
  try {

      const content = `Informações: ${JSON.stringify(jsonData)}\nPergunta: ${question}`;
      const data = {
          model: "gpt-4o-mini",
          messages: [
              { role: 'system', content: 'Você é um assistente que responde com base nas informações fornecidas.' },
              { role: 'user', content },
          ],
          temperature: 0.7
      };

      const config = {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${OPENAI_API_KEY}` // Use variável de ambiente para segurança
          }
      };

      // Aguardar a resposta da API com 'await'
      const response = await axios.post('https://api.openai.com/v1/chat/completions', data, config);
      console.log('Resposta da API:', response.data.choices[0].message.content);

      // Retornar a mensagem da resposta da API
      return response.data.choices[0].message.content;
  } catch (error:any) {
      console.error('Erro na requisição:', error.response ? error.response.data : error.message);
      throw new Error('Erro ao consultar o oráculo');
  }
}

export default ConsultaOraculo;