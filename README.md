# Full Rank Band

Full Rank Band website and Firebase CMS.

The public site is served from Firebase Hosting at `/`. The admin CMS is served
from `/admin` and uses Firebase Authentication, Cloud Firestore, and Firebase
Storage.

## Prerequisites

- Node.js and npm
- Git
- A Firebase account with access to the `fullrankband` Firebase project

## Install Firebase

Install project dependencies:

```bash
npm install
```

If you prefer a global Firebase CLI, install it with:

```bash
npm install -g firebase-tools
```

Confirm Firebase is available:

```bash
npx firebase --version
```

Log in to Firebase:

```bash
npx firebase login
```

This repository is already configured to use the Firebase project
`fullrankband` in `.firebaserc`.

## Run Locally With Firebase Emulators

Start Hosting, Auth, Firestore, and Storage emulators:

```bash
npm run firebase:emulators
```

The Emulator UI is available at:

```text
http://127.0.0.1:4000
```

Firebase prints the local Hosting URL when it starts. The configured Hosting
port is `5001`, but Firebase may choose the next open port if that port is busy.

Open the local site:

```text
http://127.0.0.1:5001
```

Open the local CMS:

```text
http://127.0.0.1:5001/admin
```

On localhost only, the CMS shows a `Create Emulator User` button. Enter any
email and password, create the emulator user, then use that same account to log
in locally.

## CMS

The CMS is available at:

```text
https://fullrankband.com/admin
```

Use the CMS to manage:

- Home page hero, venue details, footer, hero image, and custom HTML
- Events, including date, time, venue, ticket info, description, publish state,
  sort order, and optional image

Images uploaded in the CMS are saved to Firebase Storage. Page and event content
is saved to Cloud Firestore.

For production, create admin users in Firebase Authentication. The current
security rules allow public reads and authenticated writes, so only trusted
accounts should be created in the Firebase project.

## Firebase Setup

In the Firebase console for `fullrankband`, make sure these products are enabled:

- Authentication with Email/Password sign-in
- Cloud Firestore
- Firebase Storage
- Firebase Hosting

Deploy security rules with the app:

```bash
npx firebase deploy
```

## Project Structure

```text
.
├── firebase.json              # Hosting, emulator, Firestore, and Storage config
├── firestore.rules            # Firestore read/write rules
├── storage.rules              # Storage read/write rules
├── public/
│   ├── admin/index.html       # CMS login and editor
│   ├── index.html             # Public site
│   ├── scripts/               # Firebase app, CMS, and public page scripts
│   └── styles/                # Public and admin styles
└── package.json               # Local scripts and Firebase CLI dependency
```

## Deploy to Firebase

Make sure you are logged in and have access to the project:

```bash
npx firebase login
```

Optional: verify the active Firebase project:

```bash
npx firebase use
```

Deploy Hosting, Firestore rules, and Storage rules:

```bash
npm run deploy
```

## Common Commands

```bash
npm install                 # Install local dependencies
npm run firebase:emulators  # Run Firebase locally
npm run deploy              # Deploy to Firebase
npx firebase logout         # Sign out of Firebase
```
