const express = require('express');
const cors = require('cors');
const pluginManager = require('./core/pluginManager');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 3000;

app.use(cors()); // Cho phép Frontend truy cập
app.use(express.json());

// 1. Nạp Plugin trước
pluginManager.loadPlugins();

// 2. Cấu hình Routes
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});