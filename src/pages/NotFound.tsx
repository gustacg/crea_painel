import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="text-center space-y-3">
      <h1 className="text-5xl font-bold text-primary">404</h1>
      <p className="text-muted-foreground">Página não encontrada</p>
      <Link to="/" className="text-primary underline text-sm">Voltar</Link>
    </div>
  </div>
);

export default NotFound;
