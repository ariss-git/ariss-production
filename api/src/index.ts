import app from "./server";
import config from "./config/env.config";

const PORT = config.PORT;

app.listen(PORT, () =>
  console.log(`Server running on: http://localhost:${PORT}`)
);
