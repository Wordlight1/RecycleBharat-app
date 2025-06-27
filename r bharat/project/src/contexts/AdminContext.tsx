import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  role: 'admin' | 'manager';
  name: string;
}

interface PickupRequest {
  id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  scrapType: string;
  preferredDate: string;
  preferredTime: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
  additionalNotes?: string;
}

interface ScrapRate {
  id: string;
  name: string;
  description: string;
  rate: string;
  icon: string;
}

interface TeamMember {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: string;
  city: string;
  status: 'active' | 'inactive';
}

interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutDescription: string;
  contactPhone: string;
  contactEmail: string;
  whatsappNumber: string;
}

interface AdminContextType {
  user: User | null;
  isAuthenticated: boolean;
  pickupRequests: PickupRequest[];
  scrapRates: ScrapRate[];
  teamMembers: TeamMember[];
  siteContent: SiteContent;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  addPickupRequest: (request: Omit<PickupRequest, 'id' | 'createdAt'>) => void;
  updatePickupRequest: (id: string, updates: Partial<PickupRequest>) => void;
  deletePickupRequest: (id: string) => void;
  updateScrapRate: (id: string, updates: Partial<ScrapRate>) => void;
  addTeamMember: (member: Omit<TeamMember, 'id'>) => void;
  updateTeamMember: (id: string, updates: Partial<TeamMember>) => void;
  deleteTeamMember: (id: string) => void;
  updateSiteContent: (content: Partial<SiteContent>) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Sample data - in a real app, this would come from an API
  const [pickupRequests, setPickupRequests] = useState<PickupRequest[]>([
    {
      id: '1',
      name: 'Rajesh Kumar',
      phone: '+91 98765 43210',
      address: '123 MG Road, Bandra West',
      city: 'Mumbai',
      scrapType: 'Iron & Steel',
      preferredDate: '2025-01-15',
      preferredTime: '9:00 AM - 12:00 PM',
      status: 'pending',
      createdAt: '2025-01-10T10:30:00Z',
      additionalNotes: 'Old furniture and metal items'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      phone: '+91 87654 32109',
      address: '456 Park Street, Andheri East',
      city: 'Mumbai',
      scrapType: 'Electronics',
      preferredDate: '2025-01-16',
      preferredTime: '3:00 PM - 6:00 PM',
      status: 'confirmed',
      createdAt: '2025-01-11T14:20:00Z'
    }
  ]);

  const [scrapRates, setScrapRates] = useState<ScrapRate[]>([
    { id: '1', name: 'Iron & Steel', description: 'Old furniture, gates, utensils, and metal scraps', rate: '₹35-45/kg', icon: 'Car' },
    { id: '2', name: 'Plastic Bottles', description: 'Water bottles, containers, and plastic waste', rate: '₹12-18/kg', icon: 'Bottle' },
    { id: '3', name: 'Paper & Cardboard', description: 'Newspapers, books, magazines, and cardboard boxes', rate: '₹8-15/kg', icon: 'Newspaper' },
    { id: '4', name: 'Electronics', description: 'Old phones, laptops, TVs, and electronic gadgets', rate: '₹50-200/kg', icon: 'Monitor' },
    { id: '5', name: 'Copper & Brass', description: 'Wires, pipes, and copper/brass items', rate: '₹400-600/kg', icon: 'HardDrive' },
    { id: '6', name: 'Aluminum', description: 'Cans, foils, and aluminum household items', rate: '₹80-120/kg', icon: 'Battery' },
    { id: '7', name: 'Glass Bottles', description: 'Wine bottles, jars, and glass containers', rate: '₹3-8/kg', icon: 'Bottle' },
    { id: '8', name: 'Mixed Scrap', description: 'Combination of various recyclable materials', rate: 'Market Rate', icon: 'Smartphone' }
  ]);

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { id: '1', name: 'Amit Singh', phone: '+91 98765 11111', email: 'amit@recycobharat.com', role: 'Collection Executive', city: 'Mumbai', status: 'active' },
    { id: '2', name: 'Sunita Devi', phone: '+91 98765 22222', email: 'sunita@recycobharat.com', role: 'Collection Executive', city: 'Delhi', status: 'active' },
    { id: '3', name: 'Ravi Kumar', phone: '+91 98765 33333', email: 'ravi@recycobharat.com', role: 'Team Lead', city: 'Bangalore', status: 'active' }
  ]);

  const [siteContent, setSiteContent] = useState<SiteContent>({
    heroTitle: 'Turn Waste into Worth',
    heroSubtitle: 'Book a free scrap pickup from your home – we collect, recycle & reward.',
    aboutDescription: 'We\'re on a mission to transform India\'s approach to waste management by making recycling accessible, profitable, and environmentally responsible for every household.',
    contactPhone: '+91 98765 43210',
    contactEmail: 'info@recycobharat.com',
    whatsappNumber: '+91 98765 43210'
  });

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('adminUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simple authentication - in a real app, this would be an API call
    if (email === 'admin@recycobharat.com' && password === 'admin123') {
      const adminUser: User = {
        id: '1',
        email: 'admin@recycobharat.com',
        role: 'admin',
        name: 'Admin User'
      };
      setUser(adminUser);
      setIsAuthenticated(true);
      localStorage.setItem('adminUser', JSON.stringify(adminUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('adminUser');
  };

  const addPickupRequest = (request: Omit<PickupRequest, 'id' | 'createdAt'>) => {
    const newRequest: PickupRequest = {
      ...request,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setPickupRequests(prev => [newRequest, ...prev]);
  };

  const updatePickupRequest = (id: string, updates: Partial<PickupRequest>) => {
    setPickupRequests(prev => prev.map(req => req.id === id ? { ...req, ...updates } : req));
  };

  const deletePickupRequest = (id: string) => {
    setPickupRequests(prev => prev.filter(req => req.id !== id));
  };

  const updateScrapRate = (id: string, updates: Partial<ScrapRate>) => {
    setScrapRates(prev => prev.map(rate => rate.id === id ? { ...rate, ...updates } : rate));
  };

  const addTeamMember = (member: Omit<TeamMember, 'id'>) => {
    const newMember: TeamMember = {
      ...member,
      id: Date.now().toString()
    };
    setTeamMembers(prev => [...prev, newMember]);
  };

  const updateTeamMember = (id: string, updates: Partial<TeamMember>) => {
    setTeamMembers(prev => prev.map(member => member.id === id ? { ...member, ...updates } : member));
  };

  const deleteTeamMember = (id: string) => {
    setTeamMembers(prev => prev.filter(member => member.id !== id));
  };

  const updateSiteContent = (content: Partial<SiteContent>) => {
    setSiteContent(prev => ({ ...prev, ...content }));
  };

  const value: AdminContextType = {
    user,
    isAuthenticated,
    pickupRequests,
    scrapRates,
    teamMembers,
    siteContent,
    login,
    logout,
    addPickupRequest,
    updatePickupRequest,
    deletePickupRequest,
    updateScrapRate,
    addTeamMember,
    updateTeamMember,
    deleteTeamMember,
    updateSiteContent
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};