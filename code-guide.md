# Code Guide for SPEDUCATE

Follow this or else...

## Formatting Code

### Prettier

Use the _Prettier_ extension for general formatting. **Set _Prettier: Tab Width_** to **2 spaces** and
**select _Editor: Format On Save_** in Settings.

### Naming Conventions

- Files: kebab-case
  - `my-image.png`
  - `the-form.js`
- React Native Elements: PascalCase
  - `<HomeScreen>`
  - `export default function HomeScreen()`
- Variable Names: camelCase
  - `myVar`

**MAKE NAMES DESCRIPTIVE.** Everything from branch names to image files. Do it.

### Quotations

Use single quotes `' '` when possible. If you don't, Rithul will strangle you.

## Using Git

### Editing using Branches

- To make any sort of change, create a branch. **_DO NOT EDIT THE MAIN/MASTER BRANCH._**

- When on the other branch, you can make edits and commit them. Just know once a change is committed, it can be a pain to undo it. Try not to pull/fetch new content while actively working on your branch.

- Once you are ready to merge your changes to the main branch, make sure all of them are properly commited. Then, create a **Pull Request**.

### Pull Requests

- Pull Requests are requests to merge two branches together. Someone will need to go into GitHub and glance through it to see if there any conflicts. Look for formatting errors,

- Once everything is resolved, the code reviewer can accept the pull request and the main branch will be updated accordingly. **After a successfull pull request, _DELETE_ the old branch and create a new one for any edits afterward.**

- It's worth noting BEFORE a pull request has been accepted, any additional commits will be reflected on the pull request once synced.

#### Local Backups

- Before merging with the main branch, it's a good idea to copy and back up the files locally. Worst comes to worst, just start copy-pasting into the branch.

#### Merge Conflicts

- If there is a merge conflict, go through and select the content that should be kept. Ask Nathan for more info on how to do this.

### Handling Catastrophies 💀

- If you do end up editing the main branch, use `Git: Stash` to retrieve the changes that you made, save them, and undo them from the current branch. Use `Git: Checkout to...` to move to a new branch. Then, in the new branch, use `Git: Apply Stash` to apply the saved changes. Then cross your fingers and hope it worked.
