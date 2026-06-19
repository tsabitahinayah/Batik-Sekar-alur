# 🔑 Login Credentials Reference

## Demo Accounts for Testing

### 1️⃣ Admin Account
**Full System Access - All Features Enabled**

```
Username: admin
Password: admin123
```

**What you can do:**
- ✅ View all data from all sub-districts
- ✅ Create new activities
- ✅ Edit any activity
- ✅ Delete activities
- ✅ Manage user accounts
- ✅ Access all menu items

---

### 2️⃣ Statistics Agent Accounts
**Limited to Assigned Sub-district - Can Create & Edit**

#### Pleret Agent
```
Username: agen_pleret
Password: agen123
Assigned to: Kalurahan Pleret
```

#### Srimulyo Agent
```
Username: agen_srimulyo
Password: agen123
Assigned to: Kalurahan Srimulyo
```

#### Bantul Agent
```
Username: agen_bantul
Password: agen123
Assigned to: Kalurahan Bantul
```

#### Panggungharjo Agent
```
Username: agen_panggungharjo
Password: agen123
Assigned to: Kalurahan Panggungharjo
```

**What you can do:**
- ✅ View data from your assigned sub-district only
- ✅ Create new activities for your sub-district
- ✅ Edit activities from your sub-district
- ❌ Cannot delete activities
- ❌ Cannot manage user accounts
- ❌ Cannot see data from other sub-districts

---

### 3️⃣ Viewer Account
**Read-Only Access - View All Data**

```
Username: viewer
Password: viewer123
```

**What you can do:**
- ✅ View all data from all sub-districts
- ✅ Read all activities and reports
- ❌ Cannot create new data
- ❌ Cannot edit data
- ❌ Cannot delete data
- ❌ Cannot manage users

---

## 🎯 Quick Test Guide

### To Test Admin Privileges:
1. Go to `/admin/login`
2. Login with `admin` / `admin123`
3. You'll see the full admin dashboard
4. All menu items will be visible
5. Click on any menu item to manage that section

### To Test Agent Limitations:
1. Go to `/admin/login`
2. Login with `agen_pleret` / `agen123`
3. Notice that:
   - Only Pleret data is shown
   - User Management menu is hidden
   - Data is limited to Pleret sub-district

### To Test Viewer Mode:
1. Go to `/admin/login`
2. Login with `viewer` / `viewer123`
3. Notice that:
   - Dashboard shows all data (read-only)
   - Only Dashboard menu is visible
   - No create/edit/delete buttons appear

---

## 📋 User Matrix

| Username | Password | Role | Sub-District | Access Level |
|----------|----------|------|--------------|--------------|
| admin | admin123 | Admin | All | Full |
| agen_pleret | agen123 | Agent | Pleret | Own Only |
| agen_srimulyo | agen123 | Agent | Srimulyo | Own Only |
| agen_bantul | agen123 | Agent | Bantul | Own Only |
| agen_panggungharjo | agen123 | Agent | Panggungharjo | Own Only |
| viewer | viewer123 | Viewer | All | Read-Only |

---

## ⚙️ Permission Comparison

### Features by Role

| Feature | Admin | Agent | Viewer |
|---------|-------|-------|--------|
| View Dashboard | ✅ | ✅ | ✅ |
| View Activities | ✅ | ✅* | ✅ |
| Create Activities | ✅ | ✅* | ❌ |
| Edit Activities | ✅ | ✅* | ❌ |
| Delete Activities | ✅ | ❌ | ❌ |
| Manage Users | ✅ | ❌ | ❌ |
| View Coordination | ✅ | ✅* | ✅ |
| View Training | ✅ | ✅* | ✅ |
| View Monitoring | ✅ | ✅* | ✅ |

*Agent: Limited to their assigned sub-district only

---

## 🔐 Security Notes

### For Development/Demo
- Credentials are hardcoded in `lib/auth.ts`
- Passwords are plain text (for demo only)
- User sessions stored in localStorage
- No real authentication service

### For Production
You should:
1. Use a real authentication service (NextAuth.js, Auth0, Firebase)
2. Hash passwords with bcrypt
3. Store users in a database
4. Use JWT tokens instead of localStorage
5. Implement proper session management
6. Add HTTPS/SSL encryption
7. Add rate limiting to prevent brute force

---

## 🆘 Troubleshooting

### I forgot my password
- These are demo accounts, the passwords are listed above
- Reset by using the correct password from this guide

### I'm locked out
- Demo accounts cannot be locked
- Just refresh and try again with correct credentials

### My session is lost
- Check if you cleared your browser localStorage
- Login again with your credentials

### Login page shows an error
- Verify you typed username and password correctly
- Check if localStorage is enabled in your browser

---

## ✅ Testing Checklist

- [ ] Admin can access all features
- [ ] Agent sees only their sub-district data
- [ ] Viewer can only read data
- [ ] Menu items are filtered by role
- [ ] Statistics update based on role/kalurahan
- [ ] Logout button works correctly
- [ ] Session persists after refresh
- [ ] Error messages appear on wrong credentials

---

**Keep this reference handy while testing the authentication system!** 🎯
