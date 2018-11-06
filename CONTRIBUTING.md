## Contributing to React-custom-tooltip

First off, thank you for considering contributing to React-custom-tooltip. This project is open source and relies on people like you for support.

### 1. Where do I go from here?

If you've noticed a bug or have a question that doesn't belong on [Stack Overflow][], [search the issue tracker][] to see if someone else in the community has already created a ticket. If not, go ahead and [make one][new issue]!

### 2. Fork & create a branch

If this is something you think you can fix, then [fork React-custom-tooltip][] and
create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):

```sh
git checkout -b 325-add-mount-animations
```

### 3. Get the test suite running

Make sure you're have a recent **npm &amp; node.js** version installed. 

Now install the development dependencies in the project's root folder:

```sh
npm install
```
Once all dependencies are installed, you can use the test suite by running:

```sh
npm run test
```
and for automatic test runs on file updates:

```sh
npm run test:watch
``` 
**NOTE:**  If your tests are passing locally but failing on Travis, check your development environment (i.e. nodejs version) and dependencies.

### 4. You have found a bug?

* **Ensure the bug was not already reported** by [searching all issues][].
* If you're unable to find an open issue addressing the problem,
  [open a new one][new issue]. Be sure to include a **title and clear
  description**, as much relevant information as possible, and a **code sample**
  or an **executable test case** demonstrating the expected behavior that is not
  occurring.

### 5. Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help;
everyone is a beginner at first :thumbsup:

### 6. View your changes in your browser

Besides running tests _before_ and _after_ your changes you should also always check your changes in the browser. This ensures the user experience is maintained.

To see your changes hot-loaded in the browser run:

```sh
npm run dev
```

This will boot up a webpack development server. 

You should now be able to open the project's documentation page in your browser on <http://localhost:8000>.

Changes to the library will be immediately visible (hot-loaded) in the examples of the documentation page.

### 7. Get the style right

Your patch should follow the same conventions & pass the same code quality checks as the rest of the project.
The project uses airbnb's code style convention. To check that your code adheres to this style convention run:

```sh
npm run lint
```
Warnings should indicate where changes in your code need to be made.

### 8. Make a Pull Request

At this point, you should switch back to your master branch and make sure it's
up to date with React-custom-tooltip's master branch:

```sh
git remote add upstream git@github.com:react-custom-tooltip/react-custom-tooltip.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout 325-add-mount-animation
git rebase master
git push --set-upstream origin 325-add-mount-animation
```

Finally, go to GitHub and [make a Pull Request][] :thumbsup:

TravisCI will run our test suite against your code. We care about quality, so your PR 
won't be merged until all tests pass. It's unlikely, but it's possible that your changes 
pass tests in one nodejs version but fail in another. In that case, you'll have to setup
your development environment (as explained in step 3) to use the problematic node version,
and investigate what's going on!

### 8. Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code
has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing in Git, there are a lot of [good][git rebasing]
[resources][interactive rebase] but here's the suggested workflow:

```sh
git checkout 325-add-mount-animation
git pull --rebase upstream master
git push --force-with-lease 325-add-mount-animation
```

### 10. Merging a PR (maintainers only)

A PR can only be merged into master by a maintainer if:

* It is passing CI.
* It has been approved by at least two maintainers. If it was a maintainer who
  opened the PR, only one extra approval is needed.
* It has no requested changes.
* It is up to date with current master.

Any maintainer is allowed to merge a PR if all of these conditions are
met.

### 11. Shipping a release (maintainers only)

Maintainers need to do the following to push out a release:

* Make sure all pull requests are in and that changelog is current
* Update the changelog with the new version number
* Create a stable branch for that release:

  ```sh
  git checkout master
  git fetch react-custom-tooltip
  git rebase react-custom-tooltip/master
  # If the release is 2.1.x then this should be: 2-1-stable
  git checkout -b N-N-stable
  git push react-custom-tooltip N-N-stable:N-N-stable
  ```

[Stack Overflow]: http://stackoverflow.com/questions/tagged/react-custom-tooltip
[search the issue tracker]: https://github.com/justinrhodes1/react-custom-tooltip/issues?q=something
[new issue]: https://github.com/justinrhodes1/react-custom-tooltip/issues/new
[fork React-custom-tootlip]: https://help.github.com/articles/fork-a-repo
[searching all issues]: https://github.com/justinrhodes1/react-custom-tooltip/issues?q=
[make a pull request]: https://help.github.com/articles/creating-a-pull-request
[git rebasing]: http://git-scm.com/book/en/Git-Branching-Rebasing
[interactive rebase]: https://help.github.com/articles/interactive-rebase