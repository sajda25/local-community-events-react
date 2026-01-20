# 🚀 Quick Reference Guide

## Development Commands

### Start Development Server

```bash
npm run dev
```

Access at: http://localhost:5173/ (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

Output: `dist/` folder

### Preview Production Build

```bash
npm run preview
```

### Install Dependencies

```bash
npm install
```

## Git Commands for Submission

### Initialize Repository

```bash
git init
git add .
git commit -m "Initial commit: Local Events Platform"
```

### Connect to GitHub

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/local-events-app.git
git branch -M main
git push -u origin main
```

### Add Screenshots Later

```bash
git add screenshot*.png
git commit -m "Add project screenshots"
git push
```

## Project URLs

- **Development**: http://localhost:5174/
- **Submission**: https://www.starlabs.co.in/assignment
- **GitHub**: Create at https://github.com/new

## File Locations

- **Events Data**: `src/data/events.json`
- **Components**: `src/components/`
- **Pages**: `src/pages/`
- **Context**: `src/context/EventContext.jsx`
- **Styles**: `src/index.css`

## Application Routes

- `/` - Home (Browse Events)
- `/event/:id` - Event Detail
- `/rsvp-confirmation/:id` - Registration Confirmation
- `/create` - Create New Event

## Key Features to Test

1. ✅ Browse 20 events in grid layout
2. ✅ Search events (try "yoga" or "music")
3. ✅ Filter by Type (try "Workshop")
4. ✅ Filter by Location (try "Bangalore")
5. ✅ Filter by Date
6. ✅ Clear all filters
7. ✅ Pagination (navigate pages)
8. ✅ View event details (click any card)
9. ✅ Register for event
10. ✅ Create new event (full validation)

## Common Issues & Solutions

### Port already in use

If port 5173 is in use, Vite will automatically use 5174 or another available port.

### Dependencies not installed

```bash
npm install
```

### React Router not found

```bash
npm install react-router-dom
```

### TailwindCSS not working

Make sure these files exist:

- `tailwind.config.js`
- `postcss.config.js`
- `@tailwind` directives in `src/index.css`

### Build errors

```bash
# Clear cache and rebuild
rm -rf node_modules
npm install
npm run build
```

## Documentation Files

- `README.md` - Main project documentation
- `PROJECT_SUMMARY.md` - Complete overview
- `SUBMISSION_GUIDE.md` - How to submit
- `FEATURES_CHECKLIST.md` - All features
- `QUICK_REFERENCE.md` - This file

## Submission Checklist

- [ ] Test all features locally
- [ ] Take screenshots
- [ ] Create GitHub repository (PUBLIC)
- [ ] Push code to GitHub
- [ ] Add screenshots to GitHub
- [ ] Update README if needed
- [ ] Verify repository is accessible
- [ ] Submit link at https://www.starlabs.co.in/assignment

## Tech Stack Summary

- **React**: 18.x
- **Vite**: 7.x
- **React Router**: 6.x
- **TailwindCSS**: 3.x
- **Node**: v16+

## Contact & Help

If you encounter issues:

1. Check the terminal for error messages
2. Review SUBMISSION_GUIDE.md
3. Verify all dependencies are installed
4. Check that files are in correct locations

## Time Estimates

- Testing all features: 10 minutes
- Taking screenshots: 10 minutes
- GitHub setup: 10 minutes
- Final submission: 5 minutes
  **Total**: ~35 minutes

---

**You're all set! Good luck with your submission! 🎉**
