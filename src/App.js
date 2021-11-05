import './App.css';

import { useEffect } from 'react'

// useRecoilValue provides a read-only variable for your state
import { atom, useRecoilState, useRecoilValue } from 'recoil';

// The default state to hold our fetched data
const reposStateAtom = atom({
  key: "repos",
  default: []
})

const sortStateAtom = atom({
  key: "sort",
  default: ["created", "updated", "pushed"]
})

const sortSelectedAtom = atom({
  key: "sortSelect",
  default: ''
})


function App() {

  const [repos, setRepos] = useRecoilState(reposStateAtom);
  const sortChoice = useRecoilValue(sortStateAtom);
  const [sortSelected, setSortSelected] = useRecoilState(sortSelectedAtom);

  const getRepos = async () => {
    const url = `https://api.github.com/users/u4ik/repos?sort=${sortSelected}`;
    const res = await fetch(url);
    const body = await res.json();
    console.log(body);
    setRepos(body)
  }

  useEffect(() => {

    getRepos();
  }, [sortSelected])

  return (
    <div className="App">
      <header className="App-header">
        <h1>U4IK PUBLIC GITHUB REPOS</h1>

        <select onChange={(e) =>{
          setSortSelected(e.target.value)
        }}>
          {sortChoice?.map(c => (
            <option value={c}>{c}</option>
          ))}
        </select>


        {repos?.map((repo) => (
          <div key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </div>
        ))}

      </header>
    </div>
  );
}

export default App;
