# Merge Conflict Postmortem

## Task Overview
This task demonstrates handling a **merge conflict** using **two clones of the same repository**.
Both repositories modified the **same line in the same file**, which caused a conflict during merge.
The conflict was manually resolved while **preserving both changes**, followed by a successful merge commit.

---

## Repository Setup
- Two local clones were created:
  - `repo-A`
  - `repo-B`
- Both clones pointed to the same GitHub repository.
- The file `app.js` was modified in both clones on the **same line**.

---

## Conflict Scenario
1. `repo-A` modified the login success message and pushed the commit to GitHub.
2. `repo-B` modified the same line in `app.js` with a different message.
3. When `repo-B` pulled changes from GitHub, Git detected conflicting changes.
4. Automatic merge failed, resulting in a merge conflict.

---

## Conflict Detection Evidence
The conflict was identified during `git pull`, and Git reported a content conflict.

📸 Screenshot:

![Terminal conflict detected](images/terminal_solved_conflict.png)

---

## Conflict Resolution
- The conflicted file was opened using **Nano**.
- Both changes were **manually preserved** in the file.
- Conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) were removed.
- The resolved file was staged and committed.

📸 Screenshots:

![Merge conflict markers](images/MERGE_CONFLICT.png)

![Conflict inside file](images/MERGE_CONFLICT_INSIDEFILE.png)

![Resolving conflict in nano](images/merge_nano.png)

---

## Merge Commit
After resolving the conflict:
- A **merge commit** was created.
- The commit history clearly shows **branch divergence and merge**.

📸 Screenshot:

![Git commit graph](images/Graph.png)

---

## Learnings
- `git commit` saves changes **locally only**.
- `git push` is required to publish commits to the remote repository.
- Merge conflicts occur during **merge operations**, not during commits.
- Conflicts must be resolved manually when the same lines are changed differently.
- A merge commit preserves complete project history and context.

---

## Final Status
- Merge conflict successfully resolved.
- Both changes retained in `app.js`.
- Merge commit pushed to GitHub.
- Task completed as per requirements.
