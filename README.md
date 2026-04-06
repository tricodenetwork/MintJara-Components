# MintJara-Components 🎨🤖
> Reusable React AI UI Components for Chat Interfaces & Agent Workflows

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18+-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4.svg)](https://tailwindcss.com/)
[![Storybook](https://img.shields.io/badge/Storybook-7.6-FF4785.svg)](https://storybook.js.org/)

**MintJara-Components** is a curated collection of production-ready React components designed specifically for AI-powered applications. Chat interfaces, typing indicators, agent avatars, thinking states, and streaming message renders — all styled with Tailwind and fully accessible.

Built for micro1.ai frontend + AI integration roles.

---

## Overview

AI applications need UI components that feel alive. MintJara-Components provides the building blocks for chatbots, multi-agent dashboards, and LLM-powered interfaces.

### Key Features

- 💬 **Chat Components** - Message bubbles, input areas, streaming text
- 🤖 **Agent UI** - Agent cards, thinking states, action indicators
- ✨ **Animations** - Smooth streaming, typing dots, fade transitions
- 🎨 **Theming** - Fully customizable with Tailwind CSS
- ♿ **Accessible** - ARIA labels, keyboard navigation, screen reader support
- 📱 **Responsive** - Mobile-first design, adaptive layouts
- 🔧 **TypeScript** - Full type definitions and IntelliSense support

### Component Categories

| Category | Components |
|----------|------------|
| **Chat** | ChatWindow, MessageBubble, ChatInput, TypingIndicator |
| **Agent** | AgentCard, AgentThinking, AgentAction, AgentAvatar |
| **Feedback** | StreamingText, CodeBlock, LoadingState, ErrorBoundary |
| **Input** | PromptInput, TokenCounter, AttachmentUploader |
| **Layout** | Sidebar, ThreadList, ConversationHeader |

---

## Installation

```bash
# npm
npm install @tricodenetwork/mintjara-components

# yarn
yarn add @tricodenetwork/mintjara-components

# pnpm
pnpm add @tricodenetwork/mintjara-components
```

### Peer Dependencies

```bash
npm install react react-dom tailwindcss
```

---

## Quick Start

### 1. Setup Tailwind

Add to your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tricodenetwork/mintjara-components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // MintJara theme colors
        agent: {
          ceo: "#4F46E5",
          cto: "#0891B2",
          cfo: "#059669",
          cmo: "#DC2626",
          admin: "#7C3AED"
        }
      }
    }
  }
}
```

### 2. Import Components

```tsx
import { ChatWindow, MessageBubble, TypingIndicator } from '@tricodenetwork/mintjara-components';

function App() {
  return (
    <ChatWindow
      messages={messages}
      renderMessage={(msg) => (
        <MessageBubble
          content={msg.content}
          sender={msg.role}
          timestamp={msg.timestamp}
          isStreaming={msg.isStreaming}
        />
      )}
      typingIndicator={<TypingIndicator />}
    />
  );
}
```

---

## Component Showcase

### ChatWindow

The main chat interface container with scrolling, auto-scroll to bottom, and message grouping.

```tsx
import { ChatWindow, MessageBubble } from '@tricodenetwork/mintjara-components';

<ChatWindow
  messages={messages}
  currentUser="user"
  renderMessage={(message) => (
    <MessageBubble
      variant={message.role === 'user' ? 'sent' : 'received'}
      content={message.content}
      avatar={message.avatar}
      timestamp={message.createdAt}
    />
  )}
  onScrollTop={() => loadMoreMessages()}
  className="h-[600px]"
/>
```

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `messages` | `Message[]` | Array of message objects |
| `renderMessage` | `(msg: Message) => ReactNode` | Custom message renderer |
| `typingIndicator` | `ReactNode` | Component shown during AI thinking |
| `onScrollTop` | `() => void` | Callback for infinite scroll |
| `className` | `string` | Additional CSS classes |

---

### MessageBubble

Individual message component with variants for sent/received messages.

```tsx
import { MessageBubble } from '@tricodenetwork/mintjara-components';

// User message
<MessageBubble
  variant="sent"
  content="How do I implement RAG?"
  timestamp={new Date()}
  status="read" // sent, delivered, read
/>

// AI message with streaming
<MessageBubble
  variant="received"
  content={streamingText}
  isStreaming={true}
  avatar="🤖"
  agentName="ThePoet"
  agentRole="CEO Agent"
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'sent' \| 'received'` | — | Message alignment |
| `content` | `string` | — | Message text (markdown supported) |
| `avatar` | `string \| ReactNode` | — | Avatar image or emoji |
| `timestamp` | `Date` | — | Message timestamp |
| `isStreaming` | `boolean` | `false` | Show streaming cursor |
| `agentName` | `string` | — | Display name for AI agent |
| `agentRole` | `string` | — | Agent role badge |

---

### StreamingText

Animates text appearance character by character for that "AI typing" effect.

```tsx
import { StreamingText } from '@tricodenetwork/mintjara-components';

<StreamingText
  content="This text will appear character by character..."
  speed={20} // ms per character
  onComplete={() => console.log('Done streaming')}
/>
```

---

### AgentCard

Displays agent information with status indicator and action buttons.

```tsx
import { AgentCard } from '@tricodenetwork/mintjara-components';

<AgentCard
  name="Ovo CTO"
  role="Technical Architect"
  avatar="👨‍💻"
  status="online" // online, busy, offline
  department="Technical"
  skills={["System Design", "API Architecture", "Performance"]
  lastActive="2 min ago"
  onClick={() => assignTask('Ovo CTO')}
/>
```

---

### AgentThinking

Shows agent's thought process with animated dots.

```tsx
import { AgentThinking } from '@tricodenetwork/mintjara-components';

<AgentThinking
  agentName="Max CFO"
  thought="Analyzing financial projections..."
  steps={[
    { label: "Fetching data", status: "complete" },
    { label: "Running models", status: "in-progress" },
    { label: "Generating report", status: "pending" }
  ]}
/>
```

---

### TypingIndicator

Classic three-dot typing animation.

```tsx
import { TypingIndicator } from '@tricodenetwork/mintjara-components';

<TypingIndicator 
  variant="dots" // dots, pulse, wave
  color="#4F46E5"
/>
```

---

### PromptInput

Smart input with token counting and attachment support.

```tsx
import { PromptInput } from '@tricodenetwork/mintjara-components';

const [prompt, setPrompt] = useState('');

<PromptInput
  value={prompt}
  onChange={setPrompt}
  placeholder="Ask anything..."
  maxTokens={4096}
  showTokenCount={true}
  attachments={files}
  onAttachmentAdd={handleFileUpload}
  onAttachmentRemove={handleFileRemove}
  onSubmit={handleSubmit}
  disabled={isLoading}
/>
```

---

## Storybook

Explore all components interactively:

```bash
# Clone repo
git clone https://github.com/tricodenetwork/MintJara-Components.git
cd MintJara-Components

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

Visit `http://localhost:6006` to browse components.

---

## Theming

### Default Theme

```tsx
import { MintJaraProvider } from '@tricodenetwork/mintjara-components';

<MintJaraProvider
  theme={{
    colors: {
      primary: "#4F46E5",
      background: "#FFFFFF",
      surface: "#F9FAFB",
      text: "#111827",
      muted: "#6B7280"
    },
    borderRadius: {
      sm: "4px",
      md: "8px",
      lg: "12px",
      full: "9999px"
    },
    shadows: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
    }
  }}
>
  <App />
</MintJaraProvider>
```

### Dark Mode

```tsx
<MintJaraProvider theme="dark">
  <ChatWindow ... />
</MintJaraProvider>
```

---

## Project Structure

```
MintJara-Components/
├── src/
│   ├── components/
│   │   ├── Chat/
│   │   │   ├── ChatWindow.tsx
│   │   │   ├── MessageBubble.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   └── TypingIndicator.tsx
│   │   ├── Agent/
│   │   │   ├── AgentCard.tsx
│   │   │   ├── AgentThinking.tsx
│   │   │   ├── AgentAction.tsx
│   │   │   └── AgentAvatar.tsx
│   │   ├── Feedback/
│   │   │   ├── StreamingText.tsx
│   │   │   ├── CodeBlock.tsx
│   │   │   ├── LoadingState.tsx
│   │   │   └── ErrorBoundary.tsx
│   │   ├── Input/
│   │   │   ├── PromptInput.tsx
│   │   │   ├── TokenCounter.tsx
│   │   │   └── AttachmentUploader.tsx
│   │   └── Layout/
│   │       ├── Sidebar.tsx
│   │       ├── ThreadList.tsx
│   │       └── ConversationHeader.tsx
│   ├── hooks/
│   │   ├── useStreaming.ts
│   │   ├── useScrollToBottom.ts
│   │   └── useAutoResize.ts
│   ├── utils/
│   │   ├── markdown.ts
│   │   └── tokens.ts
│   ├── types/
│   │   └── index.ts
│   ├── styles/
│   │   └── globals.css
│   ├── index.ts
│   └── provider.tsx
├── stories/
│   └── *.stories.tsx
├── tests/
│   └── *.test.tsx
├── .storybook/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## Development

```bash
# Clone repository
git clone https://github.com/tricodenetwork/MintJara-Components.git
cd MintJara-Components

# Install dependencies
npm install

# Run dev server
npm run dev

# Run tests
npm test

# Run Storybook
npm run storybook

# Build for production
npm run build
```

---

## Testing

```bash
# Run unit tests
npm test

# Run with coverage
npm run test:coverage

# Run visual regression tests
npm run test:visual
```

---

## Usage with ThePoet

```tsx
import { ChatWindow, MessageBubble, AgentCard } from '@tricodenetwork/mintjara-components';
import { useThePoet } from '@tricodenetwork/thepoet-sdk';

function AgentDashboard() {
  const { agents, messages, sendMessage } = useThePoet();

  return (
    <div className="flex h-screen">
      {/* Agent Sidebar */}
      <aside className="w-64 border-r border-gray-200 p-4">
        <h2 className="font-semibold mb-4">Active Agents</h2>
        {agents.map(agent => (
          <AgentCard
            key={agent.id}
            name={agent.name}
            role={agent.role}
            status={agent.status}
            avatar={agent.avatar}
          />
        ))}
      </aside>

      {/* Chat Interface */}
      <main className="flex-1 flex flex-col">
        <ChatWindow
          messages={messages}
          renderMessage={(msg) => (
            <MessageBubble
              content={msg.content}
              variant={msg.role === 'user' ? 'sent' : 'received'}
              avatar={msg.agent?.avatar}
              agentName={msg.agent?.name}
              isStreaming={msg.isStreaming}
            />
          )}
        />
      </main>
    </div>
  );
}
```

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Contributing

Contributions welcome! Please read our [Contributing Guide](CONTRIBUTING.md).

### Component Checklist

When adding a new component:

- [ ] TypeScript types defined
- [ ] Props documented in README
- [ ] Storybook story added
- [ ] Unit tests written
- [ ] Accessibility (ARIA) labels added
- [ ] Responsive design tested
- [ ] Dark mode supported

---

## License

MIT License - see [LICENSE](LICENSE)

---

## Related Projects

- [ThePoet](https://github.com/lukewealth/ThePoet) - Multi-agent orchestration
- [LockUP](https://github.com/tricodenetwork/LockUP) - Web3 + AI integration
- [BritBye-RAG](https://github.com/tricodenetwork/BritBye-RAG) - RAG pipeline

---

## Contact

**Luke Okagha** - UI/AI Systems Architect
- LinkedIn: [linkedin.com/in/lukeokagha](https://linkedin.com/in/lukeokagha)
- Email: info@lukeokagha.com
- Website: [lukeokagha.com](https://lukeokagha.com)

Project Link: [https://github.com/tricodenetwork/MintJara-Components](https://github.com/tricodenetwork/MintJara-Components)

---

*Built with ⚛️ React, 🎨 Tailwind, and ✨ Framer Motion*