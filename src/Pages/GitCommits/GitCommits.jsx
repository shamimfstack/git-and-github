

const GitCommits = () => {
  return (
    <div>
      <h2>Git Commits</h2>
      <p>Topics to remember:</p>
      <ul>
        <li>Working Directory - current folder</li>
        <li>Local Repository - local repository stays in local machine</li>
        <li>Remote Repository - repository in Github</li>
      </ul>
      <hr />
      <p>To see git configuration</p>
      <p>git config --list</p>
      <p>To configure username and password</p>
      <p>git config --global user.name "git-account-username"</p>
      <p>git config --global user.email 'email'</p>
      <p>To create a file: touch file_name</p>
      <p>which folder is in track: git status</p>
      <p>Git initialize: git init</p>
      <p>to see list: ls</p>
      <p>to see all list file including hidden file: ls -a</p>
      <p>To track all files: git add --all</p>
      <p>TO track current directory: git add .</p>
      <p>To track specific file: git add filename</p>
      <p></p>

    </div>
  );
}

export default GitCommits;
