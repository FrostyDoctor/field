```markdown
# field — Field & Frame starter site

This repository contains a minimal static starter site for Field & Frame (locations/styling for photoshoots).

Files:
- index.html — main landing page
- styles.css — responsive styles
- script.js — small JS for navigation and gallery modal
- logo.svg — brand mark (vector)

How to upload (Windows: using cmd or PowerShell)
1. Create the local folder and copy the files there:
   - Create folder c:\field
   - Save index.html, styles.css, script.js, logo.svg, README.md into c:\field

2. Open Command Prompt or PowerShell and run these commands (one line each):

   cd /d c:\field
   git init
   git remote add origin https://github.com/FrostyDoctor/field.git
   git checkout -b main
   git add -A
   git commit -m "Initial commit: add Field & Frame starter site"
   git push -u origin main

   Notes:
   - If the push prompts for username/password for HTTPS, use your GitHub username and a Personal Access Token (PAT) as the password if required.
   - If you prefer SSH, set the remote to the SSH URL instead.

3. Enable GitHub Pages:
   - Go to: https://github.com/FrostyDoctor/field/settings/pages
   - Under "Source" choose Branch: main and folder: / (root)
   - Save. Your site will be live at https://FrostyDoctor.github.io/field/ (usually within a minute)

Preview locally (optional)
- From c:\field run:
  python -m http.server 8000
- Open http://localhost:8000 in your browser.

Next steps / tips
- Replace the placeholder Unsplash images with your own Acrewood photos in an images/ folder; update src attributes.
- If you want a real booking flow, I can add a Calendly embed or connect a form handler (Formspree / Netlify).
- Tell me if you'd like me to push these files for you instead — add me as a collaborator or create the repo on GitHub and tell me when it's ready.