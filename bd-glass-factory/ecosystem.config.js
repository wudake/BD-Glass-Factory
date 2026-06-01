module.exports = {
  apps: [
    {
      name: "bd-glass-factory",
      script: "./.next/standalone/server.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "localhost",
      },
      // Auto-restart on crash
      autorestart: true,
      // Restart memory threshold (150MB)
      max_memory_restart: "150M",
      // Log files
      out_file: "./logs/out.log",
      error_file: "./logs/err.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      // Graceful shutdown
      kill_timeout: 5000,
      listen_timeout: 10000,
    },
  ],
};
