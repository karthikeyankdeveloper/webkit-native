Great question — it boils down to **how you want to manage your design tokens in CSS:**

### You have 2 main options:

---

## ✅ Option 1: **Load all variables in a global CSS file (recommended)**

This is the most common and scalable approach. You define all your design tokens as CSS variables in a single file (like `tokens.css` or `variables.css`), and **load that file globally** into your app.

### ✅ Benefits:

* Easy to manage
* Works well with frameworks (React, Vue, Angular, etc.)
* Tokens are available everywhere

### 📦 Example Setup:

**1. `variables.css`:**

```css
:root {
  --color-primary: #0070f3;
  --spacing-sm: 8px;
  --font-size-base: 16px;
}
```

**2. Include this file in your main CSS or HTML:**

```html
<link rel="stylesheet" href="/path/to/variables.css">
```

OR if you're using a bundler (like Webpack/Vite):

```js
// main.js or App.jsx
import './variables.css';
```

**3. Use tokens in your styles:**

```css
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-sm);
}
```

---

## 🔄 Option 2: **Replace CSS file dynamically (less common)**

You can swap out entire CSS files **at runtime** (e.g., for themes or token sets), but it's more complex and usually only needed if you're supporting multiple themes or brands.

### ⚠️ Use cases:

* Theme switching (light/dark)
* White-labeling (client-specific styles)
* Runtime configuration of tokens

### 📦 Example Setup:

**1. Create multiple token files:**

```css
/* tokens-light.css */
:root {
  --color-background: #ffffff;
  --color-text: #000000;
}

/* tokens-dark.css */
:root {
  --color-background: #000000;
  --color-text: #ffffff;
}
```

**2. In your HTML or JavaScript:**

```html
<link id="theme-style" rel="stylesheet" href="tokens-light.css">
```

**3. JavaScript to swap themes:**

```js
function switchTheme(theme) {
  const link = document.getElementById('theme-style');
  link.href = theme === 'dark' ? 'tokens-dark.css' : 'tokens-light.css';
}
```

---

## 🔁 Bonus: Hybrid Approach (Load once, but override)

You can **load a base `variables.css`**, then optionally override certain tokens by loading another CSS file later (for dark mode, etc.).

```css
/* base.css */
:root {
  --color-primary: #0070f3;
}

/* dark.css */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #1e1e1e;
  }
}
```

---

## 🏁 Summary: Which one to use?

| Approach                              | Use Case                 | Pros                 | Cons                       |
| ------------------------------------- | ------------------------ | -------------------- | -------------------------- |
| **Load global variables.css**         | Single source of truth   | Simple, scalable     | None                       |
| **Replace CSS file**                  | Dynamic themes or brands | Runtime flexibility  | More complex               |
| **Hybrid (override via media or JS)** | Light/dark theme         | Clean fallback logic | Can get messy if unmanaged |

---

### ✅ Best Practice:

> Use a global `variables.css` to load all tokens, and only swap CSS files if you need theme switching or multi-brand support.

---

Would you like a working example in plain HTML/CSS/JS or with a framework like React?
