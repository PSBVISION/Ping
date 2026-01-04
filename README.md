<div align="center">

# Ping Room

### Messages that vanish. Privacy that doesn't.

**The secret and short chat(tea) for conversations that shouldn't exist.**

[**✨ Try it Live →**](https://ping-room.vercel.app)

---

</div>

## 💬 What is Ping Room?

Ping Room is a **zero-trace messaging platform** where every conversation has an expiration date. Create a room, share the link, chat in real-time — and watch everything disappear in 10 minutes. No accounts. No history. No evidence.

Perfect for:

- 🤫 Sharing sensitive information temporarily
- 🎁 Planning surprises without leaving a trail
- 💼 Quick team syncs that don't need to be archived
- 🔐 Private conversations that stay private

<div align="center">

### ⚡ Create a room. Share a secret. Leave no trace.

[**Launch Ping Room →**](https://ping-room.vercel.app)

</div>

---

## ✨ Features

| Feature                       | Description                                                           |
| ----------------------------- | --------------------------------------------------------------------- |
| 🔒 **Self-Destructing Rooms** | Every room auto-destructs in 10 minutes. All data permanently erased. |
| ⚡ **Real-time Messaging**    | Instant message delivery. No refresh needed.                          |
| 👤 **Anonymous by Default**   | Auto-generated identities like `anonymous-swift-x3kd9`                |
| 💣 **Instant Destruction**    | Can't wait? Nuke the room with one click.                             |
| 🔗 **One-Click Sharing**      | Copy room link instantly to invite others                             |
| ⏱️ **Live Countdown**         | Watch the timer tick down to destruction                              |
| 🚫 **Zero Persistence**       | Nothing survives after expiration. Nothing.                           |

---

## 🛠️ Tech Stack

| Technology                                                           | Purpose                                     |
| -------------------------------------------------------------------- | ------------------------------------------- |
| [Next.js 16](https://nextjs.org)                                     | React framework with App Router             |
| [Elysia](https://elysiajs.com)                                       | Type-safe API routes                        |
| [ Redis](https://upstash.com)                                        | Serverless Redis for room & message storage |
| [Upstash Realtime](https://upstash.com/docs/redis/features/realtime) | WebSocket-based real-time messaging         |
| [TanStack Query](https://tanstack.com/query)                         | Data fetching & caching                     |
| [Tailwind CSS v4](https://tailwindcss.com)                           | Styling                                     |
| [Zod](https://zod.dev)                                               | Schema validation                           |

## 🔐 Privacy & Security

| Promise                  | How We Deliver                                |
| ------------------------ | --------------------------------------------- |
| **No Accounts**          | Jump in anonymously. No email. No password.   |
| **No Logs**              | Messages exist only in volatile Redis storage |
| **Auto-Expiry**          | Room + messages deleted after 10 minutes      |
| **No Recovery**          | Once destroyed, data is gone forever          |
| **Client-Side Identity** | Usernames stored only in your browser         |

---

## 🚀 Self-Host Your Own

Want to run Ping Room on your own infrastructure? Here's how:

### Prerequisites

- Node.js 18+
- An [Upstash](https://upstash.com) account (free tier available)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/Ping.git
   cd ping-room
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   UPSTASH_REDIS_REST_URL="your-upstash-redis-url"
   UPSTASH_REDIS_REST_TOKEN="your-upstash-redis-token"
   ```

   Get these values from your [Upstash Console](https://console.upstash.com) after creating a Redis database.

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open the app**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Lobby - create rooms
│   ├── layout.tsx            # Root layout with providers
│   ├── globals.css           # Global styles
│   ├── api/
│   │   ├── [[...slugs]]/
│   │   │   ├── route.ts      # Elysia API routes
│   │   │   └── auth.ts       # Room auth middleware
│   │   └── realtime/
│   │       └── route.ts      # Realtime WebSocket handler
│   └── room/
│       └── [roomId]/
│           └── page.tsx      # Chat room UI
├── components/
│   └── providers.tsx         # React Query provider
├── hooks/
│   └── use-username.ts       # Anonymous username generator
└── lib/
    ├── client.ts             # Eden API client
    ├── realtime.ts           # Realtime schema & config
    ├── realtime-client.ts    # Client-side realtime hook
    └── redis.ts              # Upstash Redis instance
```

## 🔌 API Routes

| Method   | Endpoint           | Description              |
| -------- | ------------------ | ------------------------ |
| `POST`   | `/api/room/create` | Create a new room        |
| `GET`    | `/api/room/ttl`    | Get room time-to-live    |
| `DELETE` | `/api/room`        | Destroy room immediately |
| `GET`    | `/api/messages`    | Fetch room messages      |
| `POST`   | `/api/messages`    | Send a message           |

## ⚙️ Configuration

Room TTL (time-to-live) can be adjusted in `src/app/api/[[...slugs]]/route.ts`:

```typescript
const ROOM_TTL_SECONDS = 60 * 10; // 10 minutes
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

### Other Platforms

The app can be deployed anywhere that supports Next.js 16+. Make sure to set the environment variables for Upstash Redis.

## 🔐 Security Notes

- Messages are stored only in Redis with automatic expiration
- No database backups or logs of message content
- Room destruction permanently deletes all associated data
- Anonymous usernames are generated client-side and stored in localStorage

## 📜 License

MIT

---

<div align="center">

### 🔐 Built for privacy. Designed for secrets.

**Your messages deserve to disappear.**

[**Try Ping Room Now →**](https://ping-room.vercel.app)

<sub>Made with 💚 for those who value privacy</sub>

</div>

<h6 align="right"><sub><i>Thanks AI for writing this cool README</i></sub></h6>
