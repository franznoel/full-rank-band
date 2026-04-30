# Full Rank Band

Full Rank Band website.

## Developer Onboarding

This is a static website deployed with Firebase Hosting. The files served by
Firebase live in `public/`.

## Prerequisites

- Node.js and npm
- A Firebase account with access to the `fullrankband` Firebase project
- Git

## Install Firebase CLI

Install the Firebase CLI globally:

```bash
npm install -g firebase-tools
```

Confirm it is available:

```bash
firebase --version
```

Log in to Firebase:

```bash
firebase login
```

This repository is already configured to use the Firebase project
`fullrankband` in `.firebaserc`.

## Run Locally With Firebase Emulators

Start the Firebase Hosting emulator:

```bash
firebase emulators:start
```

Firebase will print the local URL for the site, usually:

```text
http://127.0.0.1:5000
```

Keep the emulator running while you edit files in `public/`, then refresh the
browser to see changes.

## Project Structure

```text
.
├── firebase.json      # Firebase Hosting configuration
├── .firebaserc        # Default Firebase project
└── public/            # Static site files deployed to Firebase Hosting
```

## Deploy to Firebase

Make sure you are logged in and have access to the project:

```bash
firebase login
```

Optional: verify the active Firebase project:

```bash
firebase use
```

Deploy the site:

```bash
firebase deploy
```

This deploys the contents of `public/` using the hosting configuration in
`firebase.json`.

## Common Commands

```bash
firebase login            # Authenticate with Firebase
firebase emulators:start  # Run the site locally
firebase deploy           # Deploy to Firebase Hosting
firebase logout           # Sign out of Firebase
```
