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
            <!-- Icon SVG -->
          </label>
          <input type="text" id="name" v-model="name" placeholder="Your Username" required />
        </div>
        
        <div class="input-group">
          <label for="email">
            <!-- Icon SVG -->
          </label>
          <input type="email" id="email" v-model="email" placeholder="Your Email" required />
        </div>
        
        <div class="input-group">
          <label for="password">
            <!-- Icon SVG -->
          </label>
          <input type="password" id="password" v-model="password" placeholder="Your Password" required />
        </div>
        
        <button type="submit" class="signup-btn">Sign Up</button>
      </form>
      
      <p class="signin-link">
        Already have an account? <nuxt-link to="../sign-in">Signin</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
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
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.name,
            email: this.email,
            password: this.password
          })
        });
        
        const result = await response.json();
        if (result.success) {
          // Redirect to root page or show success message
          this.$router.push('/');
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error('Error during sign-up:', error);
      }
    }
  }
};
</script>


<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
  background-color: #ffffff;
  margin: 5rem 0 0 0;
  /* Prevents vertical scrolling */
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
