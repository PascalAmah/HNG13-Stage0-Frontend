# Frontend Wizards - Stage 0: Profile Card

A responsive, accessible profile card component built with semantic HTML, modern CSS, and vanilla JavaScript.

## 🎯 Features

- ✅ Semantic HTML5 markup
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Accessible with ARIA labels and keyboard navigation
- ✅ Real-time millisecond timestamp display
- ✅ All required `data-testid` attributes for automated testing
- ✅ Modern CSS with Flexbox and Grid
- ✅ Smooth animations and transitions
- ✅ Focus-visible styles for keyboard users

## 📋 Required Elements

All elements include the specified `data-testid` attributes:

- `test-profile-card` - Profile card root container
- `test-user-name` - User name
- `test-user-bio` - User biography
- `test-user-time` - Current time in milliseconds
- `test-user-avatar` - User avatar image
- `test-user-social-links` - Social links container
- `test-user-social-<network>` - Individual social links
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

## 🚀 Running Locally

1. Clone the repository:

```bash
git clone <repository-url>
cd frontend-wizards-stage0
```

2. Open `index.html` in your browser:

   - Double-click the file, or
   - Use a local server (recommended):

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js http-server
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## 🧪 Testing

The profile card includes all required `data-testid` attributes for automated testing. You can verify elements using browser DevTools or automated test frameworks.

### Manual Testing Checklist

- [ ] All required elements are present with correct `data-testid` attributes
- [ ] Time displays current milliseconds and updates regularly
- [ ] Avatar image loads with proper alt text
- [ ] Social links open in new tabs with `rel="noopener noreferrer"`
- [ ] Layout is responsive on mobile, tablet, and desktop
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Focus styles are visible
- [ ] Hobbies and dislikes are distinct lists

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## ♿ Accessibility Features

- Semantic HTML elements (`article`, `header`, `nav`, `section`, `figure`)
- ARIA labels for interactive elements
- Keyboard-focusable links and buttons
- Visible focus indicators
- Alt text for images
- Reduced motion support for users with motion sensitivity

## 🎨 Design Features

- Clean, modern card design
- Smooth hover effects and transitions
- Verified badge indicator
- Interactive follow button
- Color-coded interest tags
- Responsive grid layout for social links

## 📦 File Structure

```
frontend-wizards-stage0/
├── index.html      # Main HTML file with semantic markup
├── styles.css      # Responsive CSS styles
├── script.js       # Vanilla JavaScript for interactivity
└── README.md       # This file
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👤 Profile Information

**Name**: Pascal Amaliri  
**Role**: Software Engineer  
**Bio**: Software Engineer - Focus on turn ideas into codes

## 📄 License

This project is created for the Frontend Wizards Stage 0 task.

## 🔗 Links

- Live Demo: [Add your deployed URL here]
- Repository: [Add your GitHub repo URL here]
