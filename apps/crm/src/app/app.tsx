import { lazy, Suspense, useState } from 'react';
import { Route, Routes, Navigate, Link, useLocation } from 'react-router-dom';
import { LoadingSpinner } from '@org/crm-shared-ui';

// Lazy load feature components
const ProductList = lazy(() => import('@org/crm-feature-products').then(m => ({ default: m.ProductList })));
const ProductDetail = lazy(() => import('@org/crm-feature-product-detail').then(m => ({ default: m.ProductDetail })));
const ContactsFeature = lazy(() => import('@org/crm-feature-contacts').then(m => ({ default: m.Contacts })));
const AccountsFeature = lazy(() => import('@org/crm-feature-accounts').then(m => ({ default: m.Accounts })));
const DealsFeature = lazy(() => import('@org/crm-feature-deals').then(m => ({ default: m.Deals })));

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'Contacts', path: '/contacts', icon: '👥' },
    { name: 'Accounts', path: '/accounts', icon: '🏢' },
    { name: 'Deals', path: '/deals', icon: '🤝' },
    { name: 'Products', path: '/products', icon: '📦' },
    { name: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? 'w-64' : 'w-20'
          } bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col`}
      >
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-blue-500 bg-clip-text text-transparent">
            {isSidebarOpen ? 'Open CRM' : 'OC'}
          </span>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${location.pathname.startsWith(item.path)
                ? 'bg-primary-50 text-primary-700'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
            >
              <span className="text-lg mr-3">{item.icon}</span>
              {isSidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center p-2 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
          >
            {isSidebarOpen ? 'Collapse' : '»'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-10">
          <div className="text-lg font-semibold text-gray-800">
            {navItems.find(item => location.pathname.startsWith(item.path))?.name || 'CRM'}
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">🔔</button>
            <div className="h-8 w-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">JD</div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <LoadingSpinner />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">Welcome to your Dashboard</div>} />
              <Route path="/contacts" element={<ContactsFeature />} />
              <Route path="/accounts" element={<AccountsFeature />} />
              <Route path="/deals" element={<DealsFeature />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/settings" element={<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">Settings and Preferences</div>} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;
