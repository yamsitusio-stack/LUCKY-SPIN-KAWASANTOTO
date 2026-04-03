body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: radial-gradient(circle at center, #2b2b2b, #1a1a1a);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  text-align: center;
  padding: 20px;
  position: relative;
}

.header {
  font-size: 28px;
  margin-bottom: 20px;
  color: gold;
  text-shadow: 0 0 10px #ff0, 0 0 20px #f00;
  animation: glow 1.5s infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 0 10px #ff0, 0 0 20px #f00; }
  to { text-shadow: 0 0 20px #fff, 0 0 40px #ff0; }
}

.id-section input {
  padding: 10px;
  font-size: 16px;
  margin: 10px;
  border-radius: 5px;
  border: none;
}

.wheel-section {
  position: relative;
  margin-top: 20px;
}

#wheel {
  border-radius: 50%;
  box-shadow: 0 0 30px gold;
}

#pointer {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid red;
  position: absolute;
  top: -20px;
  left: calc(50% - 20px);
}

button {
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 18px;
  cursor: pointer;
  background: gold;
  color: black;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 15px #fff;
  transition: 0.3s;
}
button:disabled {
  background: gray;
  cursor: not-allowed;
}

.fake-winners {
  margin-top: 30px;
  max-height: 200px;
  overflow-y: auto;
}
.fake-winners ul {
  list-style: none;
  padding: 0;
}
.fake-winners li {
  margin: 5px 0;
  color: #0f0;
}