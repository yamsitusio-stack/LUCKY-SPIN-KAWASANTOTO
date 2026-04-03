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
}

.id-section input {
  padding: 10px;
  font-size: 16px;
  margin: 10px;
  border-radius: 5px;
  border: none;
}

#wheel {
  margin-top: 20px;
  border-radius: 50%;
  box-shadow: 0 0 30px gold;
}

#wheel-section {
  position: relative;
}

#pointer {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 30px solid red;
  position: absolute;
  top: -20px;
  left: calc(50% - 15px);
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