---
title: 'The only right way to connect Google’s Firestore to Nuxt 3'
image: '/blog-images/firestore.png'
lang: 'en_US'
date: '11/14/2024'
---

I’ve tried all that’s on the web and wasted so much time on this that I just felt the duty to write this short article. To connect Nuxt 3, a vuejs framework and firestore, google’s cloud database, here is what you need to do.

## Saving your private key as base64 environment variable

First, get your private key (which appears in Project settings -> Service accounts -> Generate new private key). Your private key is a **json file which we need to convert to an environment file**. Create an `.env` file in root folder (make sure it is not included in git’s commits. Just include `.env` in your `.gitignore` file). Now here is how you should create your env variable:

Convert your json file to a string. This can be done via simple python code, just run & copy the output of this sample code:

```
import json
with open('your-private-key.json') as f:
    c = f.read()
    print(json.loads(c))
```
Encode your string, which is your private key, to base64. I used this [online free tool](https://www.base64encode.org/).

Save the base64 in your environment file ( `.env` )

```
FIRESTORE_SECRET=YOUR_BASE_64_PRIVATE_KEY
```

## Load you base64 string and initialize your app

Load the env var to your nuxt project. Add `runtimeConfigin` in `nuxt.config.ts`:

```
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    firestoreSecret: process.env.FIRESTORE_SECRET,
  }
})
```

In my case (and if you want to keep that file a secret, it’ll be your case too) I used firestore in server-side. I created a file located in `/server/utils/db.ts` and wrote this:

```
import admin from 'firebase-admin';

const config = useRuntimeConfig();

// First: load the firestore secret which is saved as base64 string
const fssecret = JSON.parse(Buffer.from(
    config.firestoreSecret, 'base64').toString('utf-8'))

// Second
// Initialize the Firebase Admin SDK with your service account key
admin.initializeApp({
  credential: admin.credential.cert(fssecret)
});

// Get a reference to the Firestore database
const db = admin.firestore();

export default db;
```

## Use your database reference in other files

Now you can use that database variable wherever you want in /server . Here is an example of usage in `/server/api/get-tests`:

```
export default defineEventHandler(async (event) => {
  // This route just fetches a form from db and returns it

  const body = await readBody(event)
  const testsVar = body.testsVar

  // See how I just reference db without importing it
  // Amazing, isn't it?
  const docRef = db.collection('forms').doc(testsVar)
  const doc = await docRef.get()

  return doc.data();
})
```

That’s it. In summary:

Create your private key, save it in `.env` file without exposing it as base64 string. Then, in `/server/utils/db.ts`, you decode it from base64 and initialize firestore app, then just make sure you `export default db;` and then you can use it wherever in server you like!

Thank you for reading! I wrote this fast & furiously as I am so disappointed in the amount of time it took me just to connect to Firestore. So sorry if its too straight-forward.


This article was firstly uploaded on Medium [here](https://medium.com/@ilanyashuk/the-only-right-way-to-connect-googles-firestore-to-nuxt-3-02119bb1259d).