# Student-Result-Management

Application to manage Courses, Students and Results

## Description

- Full Stack Web Application for handling ***Student-Result-Management***. 
- Equipped with adding new records and error validations.

## Getting Started

### Dependencies

Installation is documented for MacOS machine with M1.

### Installation

- [Homebrew](https://brew.sh/)

  ```bash
  curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh
  ```

- [Node](https://nodejs.org/en/)

  ```bash
  brew install node
  ```

- [Docker](https://docs.docker.com/desktop/mac/install/)

  ```bash
  brew install --cask docker
  ```

- Clone the repository

  ```bash
  git clone git@github.com:saivarun-b97/student-result-management.git
  ```

### Back-End

- On a new terminal session, Change active directory to `back-end` from cloned repositiory root

  ```bash
  cd back-end
  ```

- Copy *.env.example* file to *.env*

  ```bash
  cp .env.example .env
  ```

- Add `DB_USER` and `DB_PASWORD` variable values to *.env* file

- Install backend dependencies

  ```bash
  npm install
  ```

- Run the backend services on which the project depends

  ```bash
  docker-compose up -d
  ```

- Start the backend development server

  ```bash
  npm start
  ```

### Front-End

- On a new terminal session, Change active directory to `front-end` from cloned repositiory root

  ```bash
  cd front-end
  ```

- Install frontend dependencies

  ```bash
  npm install
  ```

- Make sure backend server is running

- Start the frontend development server

  ```bash
  npm start
  ```

### Access the servers

- Frontend server will be running on port `3000`. ( [http://localhost:3000](http://localhost:3000) )
- Backend server will be running on port `10100`. ( [http://localhost:10100](http://localhost:10100) )

## References

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/docs/getting-started.html)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main)
[![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/introduction/getting-started)
[![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![ESlint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

## Contact

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:saivarun.b97@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://ca.linkedin.com/in/saivarunb9997)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/saivarun-b97)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/SaivarunB)
