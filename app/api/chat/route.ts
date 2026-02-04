import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Convert messages to Claude format
    const claudeMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role,
      content: msg.content,
    }));

    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: `Je bent een vriendelijke Nederlandse tuinexpert. Je helpt mensen met al hun tuinvragen - van plantenverzorging tot seizoenstips, van groenten tot bloemen. Geef praktisch, persoonlijk advies in het Nederlands. Wees enthousiast en behulpzaam!`,
      messages: claudeMessages,
    });

    const assistantMessage = response.content[0].type === 'text'
      ? response.content[0].text
      : 'Sorry, ik kon geen antwoord genereren.';

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verwerken van je vraag.' },
      { status: 500 }
    );
  }
}
