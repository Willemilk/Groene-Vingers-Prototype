export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

export interface Conversation {
  id: number;
  userId: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  messages?: Message[];
}

export interface GardenProfile {
  id: number;
  userId: number;
  location: string;
  gardenSize?: string;
  soilType?: string;
  sunExposure?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Plant {
  id: number;
  gardenProfileId: number;
  name: string;
  plantType?: string;
  plantedDate?: Date;
  notes?: string;
  createdAt: Date;
}
