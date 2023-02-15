import Container from 'react-bootstrap/Container';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './bootstrap.min.css';
import DashBoard from './components/layout/DashBoard';
import { Loan } from './components/Loan';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoard />,
  },
  {
    path: '/loan/:id',
    element: <Loan />,
  },
]);

function App() {
  return (
    <Container fluid>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
