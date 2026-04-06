import React from 'react';

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  timestamp: Date;
  avatar?: string | React.ReactNode;
  agentName?: string;
  agentRole?: string;
  isStreaming?: boolean;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  avatar?: string | React.ReactNode;
  status: 'online' | 'busy' | 'offline';
  department?: string;
  skills?: string[];
  lastActive?: string;
}

export interface ThemeConfig {
  colors?: {
    primary?: string;
    background?: string;
    surface?: string;
    text?: string;
    muted?: string;
  };
  borderRadius?: {
    sm?: string;
    md?: string;
    lg?: string;
    full?: string;
  };
  shadows?: {
    sm?: string;
    md?: string;
    lg?: string;
  };
}