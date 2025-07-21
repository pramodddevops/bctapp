const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>BCT MLOPS TEAM</title>
        <style>
          body {
            background: linear-gradient(to right, #00c6ff, #0072ff);
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            text-align: center;
          }
          h1 {
            font-size: 4em;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.4);
            animation: pop 1s ease-in-out infinite alternate;
          }
          @keyframes pop {
            from { transform: scale(1); }
            to { transform: scale(1.05); }
          }
        </style>
      </head>
      <body>
        <h1>🚀 BCT MLOPS TEAM 🚀</h1>
      </body>
    </html>
  `);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('App running on http://localhost:3000');
});
