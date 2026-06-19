# 🔐 Role-Based Authentication System - Implementation Guide

## Overview

The Batik Sekar Alur project now includes a **complete role-based authentication system** with three distinct user roles, each with different permissions and data access levels.

---

## 📋 System Architecture

### Three User Roles

#### 1. **Admin** 👨‍💼
- **Full System Access**
- Can create, read, update, and delete all data
- Can manage user accounts
- Can access data from all sub-districts (kalurahan)
- No data restrictions

**Demo Credentials:**
```
Username: admin
Password: admin123
```

#### 2. **Agen Statistik** (Statistics Agent) 📊
- **Limited Access - Own Sub-district Only**
- Can create, read, and update data
- **Cannot delete** data
- Cannot manage users
- Can only access and manage data for their assigned sub-district
- Each agent is assigned to one kalurahan: Pleret, Srimulyo, Bantul, or Panggungharjo

**Demo Credentials:**
```
Username: agen_pleret      (Kalurahan Pleret)
Password: agen123

Username: agen_srimulyo    (Kalurahan Srimulyo)
Password: agen123

Username: agen_bantul      (Kalurahan Bantul)
Password: agen123

Username: agen_panggungharjo (Kalurahan Panggungharjo)
Password: agen123
```

#### 3. **Viewer** 👁️
- **Read-Only Access**
- Can only read/view data
- Cannot create, update, or delete
- Cannot manage users
- Can view all data (no restrictions)

**Demo Credentials:**
```
Username: viewer
Password: viewer123
```

---

## 🔧 Technical Implementation

### Files Created/Modified

#### New Files

1. **`lib/auth.ts`** - Authentication logic
   - Hardcoded user credentials
   - Role-based permission definitions
   - User authentication function
   - Permission retrieval function

2. **`lib/auth-context.tsx`** - Authentication context provider
   - Manages global authentication state
   - Persists user info to localStorage
   - Provides permission checking functions
   - useAuth() hook for accessing auth state

#### Modified Files

1. **`lib/types.ts`** - Updated type definitions
   - Added `UserRole` type with three roles
   - Updated `User` interface with kalurahan field
   - Added `RolePermissions` interface

2. **`app/layout.tsx`** - Root layout
   - Made it a client component
   - Wrapped app with `AuthProvider`
   - Enables authentication context throughout app

3. **`app/admin/login/page.tsx`** - Admin login page
   - Now validates credentials against hardcoded users
   - Shows authentication errors
   - Displays demo credentials for testing
   - Stores authenticated user in localStorage

4. **`app/admin/layout.tsx`** - Admin sidebar navigation
   - Checks if user is authenticated
   - Filters sidebar menu based on user role
   - Shows user info card with name and role
   - Displays logout button
   - Redirects to login if not authenticated

5. **`app/admin/page.tsx`** - Admin dashboard
   - Shows role-specific welcome message
   - Filters data based on user's kalurahan (if applicable)
   - Displays role-appropriate statistics
   - Shows permission info cards
   - Displays access restriction warnings

---

## 🔐 Permission Structure

### CRUD Permissions Matrix

| Permission | Admin | Agen Statistik | Viewer |
|-----------|-------|----------------|--------|
| **Read** | ✅ | ✅ | ✅ |
| **Create** | ✅ | ✅ | ❌ |
| **Update** | ✅ | ✅ | ❌ |
| **Delete** | ✅ | ❌ | ❌ |
| **Manage Users** | ✅ | ❌ | ❌ |

### Data Access Levels

| Role | Data Access | Details |
|------|-------------|---------|
| **Admin** | `all` | Can access all data from all kalurahan |
| **Agen Statistik** | `own` | Can only access data from their assigned kalurahan |
| **Viewer** | `view-only` | Can view all data but cannot modify |

---

## 🔌 Using the Authentication System

### In Components

Use the `useAuth()` hook to access authentication state:

```tsx
'use client'

import { useAuth } from '@/lib/auth-context'

export default function MyComponent() {
  const { user, userRole, canAccess, canAccessData } = useAuth()

  return (
    <div>
      <p>Welcome, {user?.fullName}</p>
      <p>Role: {userRole}</p>
      
      {canAccess('canDelete') && (
        <button>Delete Item</button>
      )}

      {canAccessData('Pleret') && (
        <p>You can access Pleret data</p>
      )}
    </div>
  )
}
```

### Permission Checking

```tsx
import { useAuth } from '@/lib/auth-context'

const { canAccess, canAccessData, permissions } = useAuth()

// Check specific permission
if (canAccess('canCreate')) {
  // Show create button
}

// Check data access for specific kalurahan
if (canAccessData('Bantul')) {
  // Can access Bantul data
}

// Access full permissions object
console.log(permissions.dataAccess) // 'all' | 'own' | 'view-only'
```

---

## 📊 Dashboard Features by Role

### Admin Dashboard
- View all statistics from all kalurahan
- Access all menu items
- Create, edit, delete activities
- Manage users
- See all monitoring and evaluation data

### Agen Statistik Dashboard
- View statistics for assigned kalurahan only
- Access limited menu items (no user management)
- Create and edit activities for their kalurahan
- Cannot delete data
- See activities only from their kalurahan

### Viewer Dashboard
- View all statistics (read-only)
- Limited menu access (only dashboard)
- Cannot create or edit any data
- Cannot delete data
- Cannot manage users

---

## 💾 Data Storage

### Credentials Storage
All credentials are currently **hardcoded in `lib/auth.ts`** for demonstration purposes.

**⚠️ Security Note:** For production, you should:
- Use a real authentication service (Firebase, Auth0, NextAuth.js)
- Store passwords securely (hashed with bcrypt or similar)
- Use environment variables for sensitive data
- Implement proper session management

### User Session Storage
Authenticated user info is stored in **localStorage** with key `authUser`:

```javascript
// Stored as JSON
{
  "id": "1",
  "username": "admin",
  "role": "Admin",
  "fullName": "Administrator",
  "kalurahan": null // null for Admin and Viewer, set for Agen Statistik
}
```

---

## 🔄 Authentication Flow

```
1. User enters credentials on /admin/login
   ↓
2. System validates against users list in lib/auth.ts
   ↓
3. If valid:
   - Create AuthUser object
   - Call login() from useAuth()
   - Store in localStorage
   - Redirect to /admin dashboard
   ↓
4. If invalid:
   - Show error message
   - Clear password field
   - Stay on login page
   ↓
5. On dashboard load:
   - Check localStorage for authUser
   - If found, hydrate auth state
   - Filter UI based on role/kalurahan
```

---

## 🛡️ Access Control Implementation

### Sidebar Menu Filtering

The admin layout automatically filters sidebar items based on role:

```tsx
const allSidebarItems = [
  { label: "Dashboard", href: "/admin", icon: Home, roles: ["Admin", "Agen Statistik", "Viewer"] },
  { label: "Kegiatan", href: "/admin/kegiatan", icon: FileText, roles: ["Admin", "Agen Statistik"] },
  { label: "Manajemen User", href: "/admin/users", icon: Users, roles: ["Admin"] },
  // ... more items
]

// Only items matching user role are shown
const sidebarItems = allSidebarItems.filter(
  (item) => userRole && item.roles.includes(userRole)
)
```

### Data Filtering

Activities and other data are filtered based on user's kalurahan:

```tsx
// For Agen Statistik assigned to Pleret
const filteredActivities = user?.kalurahan
  ? activities.filter((a) => a.kalurahan === user.kalurahan)
  : activities  // Admin sees all

// Result: Only activities from Pleret are shown
```

---

## 🧪 Testing the System

### Test Scenario 1: Admin Login
1. Go to `/admin/login`
2. Enter: `admin` / `admin123`
3. You should see:
   - Dashboard with all statistics
   - All menu items visible
   - "Admin" role displayed
   - All CRUD permissions enabled

### Test Scenario 2: Statistics Agent Login
1. Go to `/admin/login`
2. Enter: `agen_pleret` / `agen123`
3. You should see:
   - Dashboard with Pleret data only
   - Limited menu (no user management)
   - Activities filtered to "Pleret" only
   - Create/Update enabled, Delete disabled

### Test Scenario 3: Viewer Login
1. Go to `/admin/login`
2. Enter: `viewer` / `viewer123`
3. You should see:
   - Dashboard with all data (read-only)
   - Minimal menu access
   - Warning: "Mode Baca Saja" (Read-only Mode)
   - No create/update/delete options

---

## 🔐 Session Management

### Login Persistence
- User session persists across browser refreshes
- Stored in localStorage under key: `authUser`
- Automatically loaded on app startup
- If localStorage is cleared, user must re-login

### Logout
Click the "Logout" button in the sidebar to:
- Clear authentication state
- Remove user from localStorage
- Redirect to `/admin/login`

---

## 📝 Adding a New User

To add a new user to the system:

1. Open `lib/auth.ts`
2. Add new user object to `users` array:

```typescript
{
  id: "7",
  username: "agen_baru",
  password: "password123",
  role: "Agen Statistik",
  kalurahan: "Pleret",
  fullName: "New Statistics Agent",
}
```

3. Rebuild the project: `npm run build`
4. The new user can now login with their credentials

---

## 🚀 Future Enhancements

To make this production-ready, consider:

1. **Real Authentication Service**
   - Integrate NextAuth.js, Firebase, or Auth0
   - Replace hardcoded credentials with API calls

2. **Enhanced Security**
   - Hash passwords with bcrypt
   - Implement JWT tokens
   - Add refresh token rotation
   - Use secure HttpOnly cookies

3. **Database Integration**
   - Store users in database (MongoDB, PostgreSQL, etc.)
   - Manage roles and permissions from admin interface
   - Audit logs for user actions

4. **Role Management UI**
   - Create interface to add/edit users
   - Assign roles dynamically
   - Set permission overrides

5. **Multi-Factor Authentication**
   - Two-factor authentication (2FA)
   - Email verification
   - Phone verification

---

## ✅ Verification Checklist

- ✅ Role-based login implemented
- ✅ Three user roles with different permissions
- ✅ Data filtering by kalurahan for Agen Statistik
- ✅ Role-based UI differentiation
- ✅ Sidebar menu filtering
- ✅ Admin dashboard shows role-specific stats
- ✅ Permission info displayed on dashboard
- ✅ User session persisted in localStorage
- ✅ Logout functionality working
- ✅ Demo credentials provided
- ✅ Build successful with no errors
- ✅ Original functionality preserved

---

## 📞 Support

For questions or issues with the authentication system:
1. Check demo credentials in login page
2. Review lib/auth.ts for user configuration
3. Verify localStorage for session data
4. Check browser console for errors

---

**Last Updated:** June 19, 2026  
**Status:** ✅ Production Ready (for demonstration)  
**Test Users:** 6 (Admin + 4 Agents + 1 Viewer)
