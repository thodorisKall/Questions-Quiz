import React from "react"
import { Link, useNavigate } from "react-router-dom"

function Categories() {
  const apisData = [
    {
      url: "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple",
      label: "Sports",
    },

    {
      url: "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple",
      label: "Films",
    },

    {
      url: "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple",
      label: "Science & Nature",
    },

    {
      url: "https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple",
      label: "Mathematics",
    },
    {
      url: "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple",
      label: "Computers",
    },
    {
      url: "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple",
      label: "History",
    },
    {
      url: "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple",
      label: "Video Games",
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
      url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
      label: "General(Mix)",
    },
    {
      url: "https://opentdb.com/api.php?amount=10&category=28&difficulty=easy&type=multiple",
      label: "Vehicles",
    },
  ]

  const navigate = useNavigate()

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value
    if (selectedValue) {
      const selectedOption = apisData.find((data) => data.url === selectedValue)
      navigate("/question", {
        state: {
          apiUrl: selectedOption.url,
          categoryName: selectedOption.label,
        },
      })
    }
  }

  return (
    <div>
      Categories
      <div className='_categories'>
        {apisData.slice(0, 6).map((data) => {
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
      <div className='_categories'>
        <label>More Categories:</label>
        <select onChange={handleSelectChange}>
          <option value=''>Select a category --</option>
          {apisData.slice(6).map((data) => {
            return (
              <option key={data.url} value={data.url}>
                {data.label}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default Categories
