import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import BookingPage from './pages/BookingPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AdminGalleryPage from './pages/AdminGalleryPage.jsx'
import LoginPage from './pages/admin/LoginPage.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AdminDashboardPage from './pages/admin/AdminDashboardPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="/admin" element={<AdminGalleryPage />} /> */}
      </Route>

      {/* Admin - separate shell, no public nav/footer/WhyChooseUs */}
      <Route path="/admin/login" element={<LoginPage />} />
      <Route element={<AdminLayout />}>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  )
}
