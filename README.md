# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
# Realtor











Yes, I understand what you mean. You want to redirect the user to the login or signup page if they're not authenticated when they try to view a product's details. Once they've logged in or signed up, they should be redirected back to the product details page they were trying to access.

This functionality can be implemented using **route middleware** in Nuxt.js. Here's how you can build it:

---

### Steps to Build It

#### 1. **Set Up Authentication Middleware**
Create a middleware to check if the user is authenticated.

Create a file called `auth.js` in the `middleware` directory:

```javascript
// middleware/auth.js
export default function ({ store, redirect, route }) {
  if (!store.state.authenticated) {
    // Save the current route for redirection after login
    const intendedRoute = route.fullPath;
    redirect(`/login?redirect=${encodeURIComponent(intendedRoute)}`);
  }
}
```

---

#### 2. **Add Middleware to the Product Details Page**
Apply the `auth` middleware to the product details page.

```javascript
// pages/product/_id.vue
export default {
  middleware: 'auth',
  async asyncData({ params }) {
    const productId = params.id;
    // Fetch product details using the product ID
    const product = await fetchProductDetails(productId);
    return { product };
  },
};
```

---

#### 3. **Handle Redirection After Login**
Modify the login page to handle the `redirect` query parameter.

```javascript
// pages/login.vue
export default {
  methods: {
    async login() {
      // Simulate login process
      this.$store.commit('setAuthenticated', true);

      // Redirect to the intended route after login
      const redirectTo = this.$route.query.redirect || '/';
      this.$router.push(redirectTo);
    },
  },
};
```

---

#### 4. **Set Up the Store**
Configure the Vuex store to manage authentication state.

```javascript
// store/index.js
export const state = () => ({
  authenticated: false,
});

export const mutations = {
  setAuthenticated(state, status) {
    state.authenticated = status;
  },
};
```

---

### How It Works:
1. When a user visits the product details page (`/product/:id`), the `auth` middleware checks if they are authenticated.
2. If not authenticated, the middleware saves the current route in the `redirect` query parameter and redirects to the `/login` page.
3. After logging in, the user is redirected back to the intended product details page.

---

Let me know if you have questions or need further customization!







#toast-danger {
  position: fixed;
  top: 20px; /* Position at the top of the screen */
  right: -100%; /* Initially, hide the toast off the right side */
  transform: translateX(100%); /* Slide from right */
  transition: transform 0.5s ease, right 0.5s ease; /* Animate both transform and right properties */
}

#toast-danger.show {
  right: 20px; /* When shown, position it in the top-right corner */
  transform: translateX(0); /* Slide to its final position */
}

#toast-danger.hide {
  right: -100%; /* Slide it off the screen to the right */
  transform: translateX(100%); /* Ensure it’s off the screen */
}



xhr.open('GET', 'https://zillow-api-data.p.rapidapi.com/agent/search?agent_name=cindy&page=1&limit=2');
xhr.setRequestHeader('x-rapidapi-key', '1630e50b72msh3056391b9f3b146p15bab3jsn25f53975d672');
xhr.setRequestHeader('x-rapidapi-host', 'zillow-api-data.p.rapidapi.com');