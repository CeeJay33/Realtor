<template>
  <div class="signup-container">
    <SignNav/>
    <div class="signup-card">
      <h2 class="title">Sign Up</h2>
      <p class="subtitle">Let's join us! Create an account with,</p>
      
      <!-- Social Login Buttons -->
      <div class="social-buttons">
        <button class="social-btn google">
          <img src="/images/d34175f5e41ee479fce1a0400105d2c3.png" alt="Google" />
          Google
        </button>
        <button class="social-btn apple">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" />
          Apple
        </button>
      </div>
      
      <div class="divider">
        <span>or Signup with</span>
      </div>
      
      <!-- Sign Up Form -->
      <form @submit.prevent="handleSignUp">
        <div class="input-group">
          <label for="name">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--hugeicons MuiBox-root css-0" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></path><path d="M14.75 9.5a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0M5.5 19l.56-.98a5 5 0 0 1 4.342-2.52h3.196a5 5 0 0 1 4.342 2.52l.56.98"></path></g></svg>
          </label>
          <input type="text" id="name" v-model="name" placeholder="Your Username" required />
        </div>
        
        <div class="input-group">
          <label for="email">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--hugeicons MuiBox-root css-0" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="m7 7.5l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 7.5"></path><path d="M10.5 19.5a116 116 0 0 1-1.401-.027c-3.149-.079-4.723-.118-5.854-1.255c-1.131-1.136-1.164-2.67-1.23-5.737a69 69 0 0 1 0-2.953c.066-3.067.099-4.6 1.23-5.737C4.376 2.655 5.95 2.616 9.099 2.537a115 115 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254s1.164 2.67 1.23 5.737c.009.455.014.668.015.972"></path><path d="M19 17a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 0v.5a1.5 1.5 0 0 0 3 0V17a4.5 4.5 0 1 0-4.5 4.5"></path></g></svg>
          </label>
          <input type="email" id="email" v-model="email" placeholder="Your Email" required />
        </div>
        
        <div class="input-group">
          <label for="password">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--hugeicons MuiBox-root css-0" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M18 10.997c-.392-.8-1.452-1.976-3.63-1.926c0 0-1.727-.075-3.68-.075c-1.952 0-2.866.046-4.43.075c-1.001-.025-2.904.2-3.78 2.276c-.576 1.75-.6 5.427-.25 7.277c.075.95.576 2.276 2.128 2.976c.95.5 2.478.3 3.63.4M5.984 8.196c-.05-2.375-.15-4.25 2.603-5.801c.926-.375 2.303-.7 4.005.1c1.777 1.075 1.999 2.213 2.153 2.5c.425 1.126.2 2.726.25 3.376"></path><path d="M15.5 19.735a2.23 2.23 0 0 1-2.245 2.23c-1.236 0-2.255-.986-2.255-2.23a2.253 2.253 0 0 1 2.255-2.244c1.236 0 2.245 1 2.245 2.244m-.275-1.945l1.99-1.942m4.785 0l-1.627-1.54c-.773-.74-1.423-.094-1.747.182l-1.41 1.358m0 0l1.609 1.545"></path></g></svg>
          </label>
          <input type="password" id="password" v-model="password" placeholder="Your Password" required />
        </div>
        
        <button type="submit" class="signup-btn">Sign Up</button>
      </form>
      
      <p class="signin-link">
        Already have an account? <nuxt-link to="../sign-in">Signin</nuxt-link>
      </p>
    </div>

    <ToastReg/>
    <BadToastReg/>
  </div>
</template>

<script>
import useBadToast from '../composables/useBadToast';


// import ToastReg from '~/components/ToastReg.vue';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async handleSignUp() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json', 
          },
          body: JSON.stringify({
            username: this.name,
            email: this.email,
            password: this.password,
          }),
          credentials: 'include', 
        });

        
      const { showToast } = useToast();
        const { showBadToast } = useBadToast();
        
        
        const result = await response.json();

        if (result.status === "Successful") {
           showToast('Account created successfully!');
          this.$router.push('/');
        } else {

          // console.log(result);
          showBadToast(result.message);
        }
      } catch (error) {
        console.error('Error during sign-up:', error);
        
      }
    }
  }
}
</script>


<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
  background-color: #ffffff;
  margin: 5rem 0 0 0;
}

.signup-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  width: 390px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.social-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background 0.3s;
  flex: 1;
}

.social-btn img {
  height: 20px;
}

.google {
  margin-right: 8px;
}

.apple {
  margin-left: 8px;
}

.social-btn:hover {
  background-color: #f0f0f0;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  color: #999;
  margin: 1rem 0;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #ddd;
}

.divider::before {
  margin-right: 0.5em;
}

.divider::after {
  margin-left: 0.5em;
}

.input-group {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #f0efef;
  margin-bottom: 1rem;
}

.input-group label {
  color: #aaa;
  font-size: 1.1rem;
  margin-right: 0.5rem;
}

.input-group input {
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  font-size: 0.9rem; /* Set to 16px to prevent iOS zooming */
   color: #333;
}

.signup-btn {
  background-color: #4a5efb;
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s;
}

.signup-btn:hover {
  background-color: #3d4ed1;
}

.signin-link {
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
}

.signin-link a {
  color: #4a5efb;
  text-decoration: none;
}

@media (max-width: 768px) {
  .signup-card {
    max-width: 100%; /* Takes 90% of the screen on smaller devices */
    padding: 1.5rem; 
    margin-top: 4rem;
  }
  
  .title {
    font-size: 1.6rem;
  }
  
  .subtitle, .signin-link {
    font-size: 0.9rem;
  }
  
  .input-group input {
    font-size: 1rem; /* Prevents zooming on smaller screens */
     padding: 0.2rem;

  }

  .google {
  margin-right: 8px;
  padding: 0.7rem 0.7rem;
}

.apple {
  margin-left: 8px;
}


  .signup-btn {
    font-size: 1rem;
     padding: 0.6rem;
     margin-top: 0.5rem;
  }
}

@media (max-width: 399px) {
  .signup-card {
    max-width: 95%; /* Takes 95% of the screen on extra-small devices */
    padding: 1rem;
    margin-top: 3rem;
  }
  
  .title {
    font-size: 1.5rem;
  }
  
  .subtitle, .signin-link {
    font-size: 0.85rem;
  }
  
  .input-group input {
    font-size: 0.8rem; /* Prevents zooming */
    padding: 0.1rem;
  }

  .signup-btn {
    /* font-size: 0.85rem; */
  }
}
</style>
