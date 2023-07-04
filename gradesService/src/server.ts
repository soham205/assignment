import app from "./app";

import { PORT } from "./config";

app.listen(PORT, () => {
	return console.info(`Server is listening at http://localhost:${PORT}`);
});