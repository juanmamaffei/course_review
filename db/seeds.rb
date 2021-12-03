
courses = Course.create([
    {
        name: "Ruby Course",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/200px-Ruby_logo.svg.png"
    },
    {
        name: "Ruby on Rails Course",
        image_url: "https://rubyonrails.org/images/rails-logo.svg"
    },
    {
        name: "React Course",
        image_url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
    },
    {
        name: "BDD with RSpec and Rails",
        image_url: "https://rspec.info/images/logo.png"
    },
    {
        name: "Calculus: Precalculus",
        image_url: ""
    },
    {
        name: "Calculus: Limits and derivates",
        image_url: ""
    },
    {
        name: "Calculus: Integrals",
        image_url: ""
    },
    {
        name: "Algebra",
        image_url: ""
    }
])

reviews = Review.create([
    {
        title: "Average course",
        description: "Average course, great instructor.",
        score: 4,
        course_id: Course.last
    },
    {
        title: "Bad course",
        description: "Meeeh.",
        score: 1,
        course_id: Course.last
    },
    {
        title: "OMG",
        description: "The instructor is very clear.",
        score: 4,
        course_id: Course.first
    },
    {
        title: "Great course",
        description: "Excellent quality of content.",
        score: 5,
        course_id: Course.first
    },
])