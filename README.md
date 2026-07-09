# EN2H Booking Platform REST API

This is a RESTful API built with **NestJS**, **TypeScript**, and **PostgreSQL** for managing services and customer bookings. It was developed as a technical assignment for the Software Engineer Intern (NestJS) position at EN2H.

## 🚀 Project Overview
This platform allows administrators to manage bookable services and allows customers to book appointments. It utilizes a clean architecture pattern and is heavily fortified with validation, error handling, and robust business logic.

### Bonus Features Implemented:
* **Swagger API Documentation:** Fully interactive documentation available at `/api`.
* **Global Validation Pipes:** Powered by `class-validator` and `class-transformer` to reject malformed requests instantly.
* **Global Exception Handling:** A custom HTTP filter ensures all errors return a clean, standardized JSON response.
* **Smart Booking Prevention:** Automatically prevents duplicate bookings for the same service, date, and time.
* **Search & Filter:** The `GET /bookings` endpoint supports query parameters to filter by `status` (e.g., PENDING) and search by customer name or email.

---

## 🛠 Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-url>
   cd en2h-booking-api
Install dependencies:

Bash
npm install
⚙️ Environment Variables & Database Setup
Create a .env file in the root directory (you can copy .env.example).

Ensure you have a local instance of PostgreSQL running and an empty database created named en2h_booking.

Update the .env file with your credentials:

Code snippet
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_postgres_password
DB_DATABASE=en2h_booking

# JWT Configuration
JWT_SECRET=en2h_super_secret_key_123
🏃 Running the Application
Bash
# development mode
npm run start:dev

# production mode
npm run start:prod
🗄️ Running Migrations
Database changes are managed via explicit TypeORM migrations.
To run the migrations and update your database schema to the latest version, use the following command:

Bash
npm run migration:run
(Note for development: To generate a new migration after making changes to an entity, run npm run migration:generate src/migrations/YourMigrationName)

# 📚 API Documentation
This API uses Swagger for interactive documentation and testing.
Once the application is running locally, navigate to:
http://localhost:3000/api

Note: To test protected routes (such as creating /services and managing /bookings), you must first use the /auth/register and /auth/login endpoints. Copy the resulting JWT token, click the "Authorize" padlock icon at the top of the Swagger UI, and paste your token.

# 🧠 Assumptions Made
Database Migrations: While TypeORM's synchronize: true can be used for rapid prototyping, explicit migration files have been generated and configured to meet professional standards and ensure safe schema updates.

Public Bookings: As per the project requirements, customers do not need to log in to create a booking. Therefore, the POST /bookings endpoint does not utilize the JWT Auth Guard.

Date & Time Formats: For simplicity and consistency in REST communication, bookingDate is strictly expected as a YYYY-MM-DD string, and bookingTime as an HH:MM string.

# 🔮 Future Improvements
Add Role-Based Access Control (RBAC) to differentiate between "Admin" privileges and standard authenticated users.

Implement pagination for the GET /bookings and GET /services endpoints to handle large database tables efficiently.

Write comprehensive Unit and E2E tests using Jest.
