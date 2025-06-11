import app from "./app";
import 'dotenv/config';

const PORT = process.env.PORT || 8080;

try {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.log(error);
}