body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: radial-gradient(circle at center, #2b2b2b, #1a1a1a);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-x: hidden;
}

.container {
  text-align: center;
  padding: 20px;
}

.header {
  font-size: 32px;
  margin-bottom: 20px;
  color: gold;
  text-shadow: 0 0 10px #ff0, 0 0 20px #f00;
  animation: glow 1.5s infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 0 10px #ff0,0 0 20px #f00; }
  to { text-shadow: 0 0 20px #fff,0 0 40px #ff0; }
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
  box-shadow: 0 0 50px gold;
}

#pointer {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 50px solid red;
  position: absolute;
  top: -25px;
  left: calc(50% - 25px);
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

button {
  margin-top: 20px;
  padding: 12px 30px;
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
button:hover:enabled {
  transform: scale(1.05);
  box-shadow: 0 0 30px gold;
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.8);
}

.modal-content {
  background-color: #111;
  margin: 15% auto;
  padding: 20px;
  border: 2px solid gold;
  width: 80%;
  max-width: 400px;
  text-align: center;
  border-radius: 15px;
}

.close {
  color: #fff;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
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
  animation: scroll 5s linear infinite;
}
@keyframes scroll {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}