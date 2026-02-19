
# 🟢 Sir Patrick NYSC Blog

Welcome to the **Sir Patrick NYSC Blog**, a web platform designed to provide helpful guides, personal experiences, and valuable resources for Nigerian youths undergoing the NYSC (National Youth Service Corps) journey.

![image](https://github.com/user-attachments/assets/583ddd2f-d1ad-4ada-b2d0-84ab67c5e9f8)

---

## 📌 Features

- 📰 **Blog Post Listings** — Clean, paginated blog layout (6 posts per screen)
- 🔍 **Blog Slug Navigation** — SEO-friendly routing using TanStack Router
- 🧾 **Detailed Blog Pages** — Each blog post loads individually
- 🎯 **Latest News Section** — Highlights recent NYSC events
- 📣 **Telegram CTA** — Strong call-to-action to join Telegram group
- 🚨 **Custom Error Pages** — Styled fallback when content fails to load
- 🧠 **Responsive Design** — Mobile-first UI using Tailwind CSS
- 🪄 **Optimized Image Handling** — Local and external images styled responsively

---

## 🚀 Tech Stack

| Tech               | Description                          |
|--------------------|--------------------------------------|
| **Vite**           | App Router with Server Components    |
| **TanStack Router**| For client-side routing              |
| **Tailwind CSS**   | Utility-first styling                |
| **React Query**    | Data fetching & caching              |
| **TypeScript**     | Type-safe development                |
| **Convex**         | Database                             |

---

## 🧰 Getting Started

```bash
# Clone the repo
git clone https://github.com/HenryAgu/sir-patrick.git

# Navigate to the project folder
cd sir-patrick

# Install dependencies
npm install

# Run the dev server
npm run dev
```

---

## 🧪 Folder Structure

```bash
.
├── src/
│   ├── components/        # Reusable components
│   ├── pages/             # Blog pages
│   ├── lib/               # Utilities & API calls
│   ├── routes/            # TanStack route files
│   └── types/             # TypeScript interfaces
├── public/                # Static images
└── README.md
```

---

## 🛠 Blog Slug Setup

Using TanStack Router's dynamic file routing:

```ts
// File: src/routes/blog/$slug.tsx
export const Route = createFileRoute('/blog/$slug')({
  component: BlogPage,
});
```

---

## 💡 Error Handling

```tsx
if (error) return (
  <div className="bg-red-50 p-5 rounded text-center border border-red-200">
    <h2 className="text-xl font-bold text-red-700">💥 Blog Failed to Load</h2>
    <p className="text-red-600">Please try again later or check your connection.</p>
  </div>
);
```

---

## 📫 Contact

If you encounter any issues or have suggestions, feel free to reach out:

📧 Email: [onlinenysccommunity@gmail.com](mailto:onlinenysccommunity@gmail.com)

---

## 🧠 License

[MIT](https://choosealicense.com/licenses/mit/)
