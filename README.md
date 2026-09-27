# ES Pont - Luxury Estate in Son Vida, Mallorca

Official direct booking and luxury estate showcase for ES Pont.

## Running Locally

To run the project on your machine:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <repo-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or the URL shown in your terminal) in your browser.

> **Note:** Vite projects use modern JavaScript ES Modules (`<script type="module">`). You must run `npm run dev` or serve the `dist/` directory via an HTTP server. Double-clicking `index.html` directly in your file explorer will cause CORS blocks and a blank page.

## Building for Production & GitHub Pages

To build the static files:

```bash
npm run build
```

This generates production-ready static assets in the `dist/` folder with relative paths (`base: './'`), making it 100% compatible with GitHub Pages or custom subdirectories.

### Automatic GitHub Pages Deployment

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. Push to `main` (or trigger the workflow manually under the **Actions** tab).
5. Your website will be live at `https://<username>.github.io/<repository-name>/`.
