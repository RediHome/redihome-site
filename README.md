# RediHome Website

**Built Better. Built Faster. Built for You.**

A complete Next.js website for RediHome Corporation - affordable homeownership for Birmingham's working families.

---

## 🚀 Deploy to Vercel (5 Minutes)

### Step 1: Create a GitHub Account
If you don't have one: https://github.com/signup

### Step 2: Create a New Repository
1. Go to https://github.com/new
2. Name it `redihome-website`
3. Keep it Public or Private
4. Click **Create repository**

### Step 3: Upload Files
1. On your new repo page, click **"uploading an existing file"**
2. Open the unzipped `redihome-final` folder on your computer
3. Select ALL files and folders inside (not the folder itself)
4. Drag them into your browser
5. Click **Commit changes**

### Step 4: Deploy to Vercel
1. Go to https://vercel.com
2. Click **Sign Up** → **Continue with GitHub**
3. Click **Add New Project**
4. Select your `redihome-website` repo
5. Click **Deploy**
6. Wait 2-3 minutes

**Done!** Your site is live at `redihome-website.vercel.app`

---

## 🌐 Connect Your Domain (redihome.io)

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Type `redihome.io` and click **Add**
4. Vercel shows DNS records to configure
5. Log into your domain registrar (GoDaddy, Namecheap, etc.)
6. Update DNS settings as Vercel instructs
7. Wait 15-60 minutes for propagation

---

## 📁 Project Structure

```
redihome-final/
├── app/
│   ├── layout.js          # Root layout, SEO, fonts
│   ├── page.js            # Homepage
│   ├── globals.css        # Global styles
│   ├── components.js      # Shared components (Nav, Footer)
│   ├── about/
│   │   └── page.js        # About page (founder story)
│   ├── homes/
│   │   └── page.js        # Our Homes page (floor plans)
│   ├── how-it-works/
│   │   └── page.js        # How It Works page
│   ├── financing/
│   │   └── page.js        # Financing page
│   └── contact/
│       └── page.js        # Contact page
├── public/                 # Static files (add logo here)
├── package.json
├── next.config.js
└── README.md
```

---

## 🎨 Brand Colors (Already Configured)

- **Primary Blue**: `#4A5FA8`
- **Orange Accent**: `#E09145`
- **Background**: `#F8F9FC`

---

## 📝 Pages Included

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, pillars, process, financing overview, community impact |
| Our Homes | `/homes` | Floor plans (Magnolia, Dogwood + coming soon) |
| How It Works | `/how-it-works` | 6-step process, timeline, FAQs |
| Financing | `/financing` | Right@Home program, calculator, qualification info |
| About | `/about` | Founder story, mission, values |
| Contact | `/contact` | Contact form, phone, email |

---

## ✏️ Making Updates

### Quick Text Changes (via GitHub)
1. Go to your repository on GitHub
2. Navigate to the file (e.g., `app/page.js`)
3. Click the pencil icon ✏️
4. Make your changes
5. Click **Commit changes**
6. Vercel auto-deploys in ~60 seconds

### Add Your Logo
1. Put your logo file in the `/public` folder
2. In `app/components.js`, replace the SVG Logo component with:
   ```jsx
   <img src="/your-logo.png" alt="RediHome" height={44} />
   ```

### Add Floor Plan Images
1. Add images to `/public` folder (e.g., `magnolia.jpg`)
2. In `app/homes/page.js`, replace the placeholder div with:
   ```jsx
   <img src="/magnolia.jpg" alt="The Magnolia" style={{ width: '100%', height: 280, objectFit: 'cover' }} />
   ```

---

## 🔗 Important Links

All "Find a Lot" buttons link to: `https://homepoint.co/redihome`

Contact info:
- Email: `sales@redihome.io`
- Phone: `205-612-5445`

---

## 🛠 Local Development (Optional)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

---

Built with ❤️ for Birmingham's working families.

© 2025 RediHome Corporation
