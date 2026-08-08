import { Navigate } from 'react-router-dom'
import { adminAuth } from '../api/client.js'

export default function ProtectedRoute({ children }) {
  if (!adminAuth.isLoggedIn()) {
    return <Navigate to="/admin/login" replace />
  }
  return children
}
