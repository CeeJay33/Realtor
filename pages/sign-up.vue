<template>
  <div class="signup-container">
    <SignNav/>
    <div class="signup-card">
      <h2 class="title">Sign Up</h2>
      <p class="subtitle">Let's Join us! Create an account with,</p>
      
      <!-- Social Login Buttons -->
      <div class="social-buttons">
        <button class="social-btn google">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" />
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
            <i class="fas fa-user"></i>
          </label>
          <input type="text" id="name" v-model="name" placeholder="Your Name" required />
        </div>
        
        <div class="input-group">
          <label for="email">
            <i class="fas fa-envelope"></i>
          </label>
          <input type="email" id="email" v-model="email" placeholder="Your Email" required />
        </div>
        
        <div class="input-group">
          <label for="password">
            <i class="fas fa-lock"></i>
          </label>
          <input type="password" id="password" v-model="password" placeholder="Your Password" required />
        </div>
        
        <button type="submit" class="signup-btn">Sign Up</button>
      </form>
      
      <p class="signin-link">
        Already have an account? <a href="/signin">Signin</a>
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
    }
  },
  methods: {
    handleSignUp() {
      // Placeholder for handling sign-up logic
      console.log('Sign Up with:', this.name, this.email, this.password);
    }
  }
}
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff;
  /* Prevents vertical scrolling */
}

.signup-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  width: 370px;
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
  background-color: #f9f9f9;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
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
  font-size: 1rem; /* Set to 16px to prevent iOS zooming */
  color: #333;
}

.signup-btn {
  background-color: #4a5efb;
  color: #fff;
  border: none;
  padding: 0.8rem;
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
    max-width: 90%; /* Takes 90% of the screen on smaller devices */
    padding: 1.5rem; 
    overflow-y: hidden;
  }
  
  .title {
    font-size: 1.6rem;
  }
  
  .subtitle, .signin-link {
    font-size: 0.9rem;
  }
  
  .input-group input {
    font-size: 1rem; /* Prevents zooming on smaller screens */
  }

  .signup-btn {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .signup-card {
    max-width: 95%; /* Takes 95% of the screen on extra-small devices */
    padding: 1rem;
  }
  
  .title {
    font-size: 1.5rem;
  }
  
  .subtitle, .signin-link {
    font-size: 0.85rem;
  }
  
  .input-group input {
    font-size: 1rem; /* Prevents zooming */
    padding: 0.2rem;
  }

  .signup-btn {
    font-size: 0.85rem;
  }
}
</style>
