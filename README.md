# ES Pont - Luxury Estate in Son Vida, Mallorca

Official direct booking and luxury estate showcase for ES Pont.

## Deploying Directly from the `main` Branch (No GitHub Actions)

The project is pre-configured to deploy directly from your `main` branch using GitHub's native `/docs` folder option:

1. Push your repository to GitHub (ensure the `docs/` folder is committed).
2. Go to your repository on GitHub.
3. Click **Settings** (top navigation tab).
4. In the left sidebar, click **Pages**.
5. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **`main`**
   - **Folder dropdown**: Select **`/docs`** (do not select `/ (root)`)
   - Click **Save**.
6. GitHub will immediately deploy your site at `https://<your-username>.github.io/<repository-name>/`.

> **Why `/docs`?** GitHub Pages requires static pre-compiled HTML/JS/CSS to serve a website without Actions. Vite builds the compiled production files directly into the `/docs` folder with relative paths (`./assets/...`) and a `.nojekyll` file so GitHub Pages renders everything out-of-the-box.

---

## Local Development

To run the project on your machine:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Rebuild the `/docs` folder after code updates:**
   ```bash
   npm run build
   ```
