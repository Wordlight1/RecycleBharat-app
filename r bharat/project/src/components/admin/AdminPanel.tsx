import React, { useState } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import AdminLogin from './AdminLogin';
import AdminLayout from './AdminLayout';
import Dashboard from './Dashboard';
import PickupRequests from './PickupRequests';
import ScrapRates from './ScrapRates';
import TeamMembers from './TeamMembers';
import SiteContent from './SiteContent';
import ContactInfo from './ContactInfo';
import Settings from './Settings';

export default function AdminPanel() {
  const { isAuthenticated } = useAdmin();
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'pickups':
        return <PickupRequests />;
      case 'rates':
        return <ScrapRates />;
      case 'team':
        return <TeamMembers />;
      case 'content':
        return <SiteContent />;
      case 'contact':
        return <ContactInfo />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AdminLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </AdminLayout>
  );
}