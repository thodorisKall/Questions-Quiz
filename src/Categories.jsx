import React from "react"
import { Link } from "react-router-dom"

function Categories() {
  const apisData = [
    {
      url: "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple",
      label: "Sports",
    },
    {
      url: "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple",
      label: "Video Games",
    },
    {
      url: "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple",
      label: "Films",
    },
    {
      url: "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple",
      label: "Animals",
    },
    {
      url: "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple",
      label: "Music",
    },
    {
      url: "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple",
      label: "Science & Nature",
    },
    {
      url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
      label: "General(Mix)",
    },
  ]

  return (
    <div>
      Categories
      <div className='_categories'>
        {apisData.map((data) => {
          return (
            <Link
              key={data.url}
              to='/question'
              state={{ apiUrl: data.url, categoryName: data.label }}
            >
              <h2>{data.label}</h2>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
