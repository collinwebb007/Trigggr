# How to Update Your Website

## 1. Make Changes Locally
The entire website is contained mainly in **`index.html`**. Code is styled using **Tailwind CSS** classes directly in the HTML.

- **Change Text**: Search for the text you want to change in `index.html` and edit it.
- **Change Colors/Fonts**: Edit the `tailwind.config` script at the top of `index.html`.
- **Change Images**: 
    1.  Save your new image into the `assets/` folder.
    2.  Update the `src="..."` attribute in `index.html` to point to your new file (e.g., `assets/my-new-image.jpg`).

## 2. Preview Changes
To see your changes before the world does:
- simply double-click **`index.html`** in your file folder to open it in your browser.
- OR run this command in your terminal:
  ```bash
  open index.html
  ```
- Refresh the browser page after every save to see updates.

## 3. Publish (Deploy)
When you are happy with your changes, send them to GitHub. The "Action" we set up will automatically detect the changes and update the live site (takes ~1-2 mins).

Run these three commands in your terminal:

```bash
git add .
git commit -m "Describe your change here"
git push
```

That's it! Your site will update automatically.
