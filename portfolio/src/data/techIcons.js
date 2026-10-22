// Devicon SVGs, pinned to a release so logos never change underneath us.
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons';
const icon = (path) => `${DEVICON}/${path}.svg`;

const react = icon('react/react-original');
const django = icon('django/django-plain');

// Keys match the exact labels used in data/portfolio.js
export const techIcons = {
  // Languages
  TypeScript: icon('typescript/typescript-original'),
  'JavaScript (ES6+)': icon('javascript/javascript-original'),
  Python: icon('python/python-original'),
  'Python 3.12': icon('python/python-original'),
  'C/C++': icon('cplusplus/cplusplus-original'),
  Bash: icon('bash/bash-original'),
  HTML5: icon('html5/html5-original'),
  CSS3: icon('css3/css3-original'),

  // Frontend
  React: react,
  'React 18': react,
  'React 19': react,
  'React Native (learning via FYP)': react,
  'Next.js': icon('nextjs/nextjs-original'),
  Zustand: icon('zustand/zustand-original'),
  'Zustand v5': icon('zustand/zustand-original'),
  MUI: icon('materialui/materialui-original'),
  'MUI v7': icon('materialui/materialui-original'),
  'Bootstrap 5': icon('bootstrap/bootstrap-original'),
  Vite: icon('vitejs/vitejs-original'),
  'Framer Motion': icon('framermotion/framermotion-original'),
  'Chart.js': icon('chartjs/chartjs-original'),

  // Backend
  'Node.js': icon('nodejs/nodejs-original'),
  'Express.js': icon('express/express-original'),
  Django: django,
  FastAPI: icon('fastapi/fastapi-original'),
  Flask: icon('flask/flask-original'),
  'Flask 3': icon('flask/flask-original'),
  'Swagger / OpenAPI': icon('swagger/swagger-original'),
  Pandas: icon('pandas/pandas-original'),

  // Databases
  PostgreSQL: icon('postgresql/postgresql-original'),
  MySQL: icon('mysql/mysql-original'),
  MongoDB: icon('mongodb/mongodb-original'),
  Supabase: icon('supabase/supabase-original'),
  SQLAlchemy: icon('sqlalchemy/sqlalchemy-original'),
  'SQLAlchemy / Django ORM': icon('sqlalchemy/sqlalchemy-original'),

  // DevOps
  Docker: icon('docker/docker-original'),
  'Docker (multi-stage)': icon('docker/docker-original'),
  Nginx: icon('nginx/nginx-original'),
  'GitHub Actions CI/CD': icon('githubactions/githubactions-original'),
  'Google Cloud Run': icon('googlecloud/googlecloud-original'),
  Railway: icon('railway/railway-original'),
  Vercel: icon('vercel/vercel-original'),
  Linux: icon('linux/linux-original'),

  // QA
  pytest: icon('pytest/pytest-original'),
  Postman: icon('postman/postman-original'),
};

// Dark monochrome logos that disappear on a black background
export const invertedIcons = new Set([
  'Express.js',
  'Flask',
  'Flask 3',
  'Next.js',
  'Vercel',
  'Railway',
  'Django',
]);
