import { Outlet } from 'react-router-dom';
import { Sidebar } from '../sidebar'; 
export function AppLayout() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased ">
      <Sidebar />
      <main className="flex-1 p-6">

        <Outlet />
      </main>
    </div>
  );
}